const fs = require('fs-extra')
const changeCase = require('change-case')
const path = require('path')
const routePath = path.resolve('src', 'route', 'index.ts')
const validatorNotEmpty = (name) => (value) =>
  value.length ? true : `${name} is required`

const appendRoute = (config) => {
  let routes = fs.readFileSync(routePath, 'utf8')
  console.log(routes)
  console.log(JSON.parse(routes))
}

module.exports = function(plop, config) {
  config = config || {}
  config.basePath = config.basePath || './src'
  config.prefix = config.prefix ? config.prefix + ':' : ''
  plop.setGenerator('view', {
    description: 'Generate View',
    prompts: [
      {
        type: 'input',
        message: 'Your View name',
        name: 'viewName',
        validate: (value) => {
          if (!value.length) return 'A view name is required.'
          if (!value.match(/^[a-zA-Z]+$/))
            return 'A view name can only contain letters.'
          //   if (changeCase.pascalCase(value) !== value)
          //     return 'A view name must be written in PascalCase.'
          return true
        }
      },
      {
        type: 'confirm',
        message: 'Do you want to add a route for this view?',
        name: 'shouldAddRoute'
      }
    ],
    actions: (answers) => {
      const viewName = changeCase.pascalCase(answers.viewName)
      let actions = [
        {
          type: 'add',
          path: path.resolve(config.basePath, `views/${viewName}.vue`),
          templateFile: path.resolve(__dirname, 'scaffold/views/view.hbs')
        },
        {
          type: 'add',
          path: path.resolve(
            config.basePath,
            `components/${viewName}/index.vue`
          ),
          templateFile: path.resolve(
            __dirname,
            'scaffold/components/component.hbs'
          )
        }
      ]

      if (answers.shouldAddRoute) {
        actions = actions.concat([
          {
            type: 'modify',
            path: path.resolve(config.basePath, 'route', 'index.ts'),
            pattern: /(\/\*\!\ scaffold:insert:route \*\/)/, // https://regex101.com/r/kVn3CA/1
            template:
              "{\n      path: '/{{lowerCase viewName }}',\n      name: '{{ viewName }}',\n      component: {{ viewName }}\n    },\n    $1"
          },
          {
            type: 'modify',
            path: path.resolve(config.basePath, 'route', 'index.ts'),
            pattern: /(\/\*\!\ scaffold:import:route \*\/)/, // https://regex101.com/r/azlBwd/1
            template:
              "import {{ viewName }} from '@/views/{{pascalCase viewName }}.vue'\n$1"
          }
        ])
      }

      return actions
    }
  })
}
