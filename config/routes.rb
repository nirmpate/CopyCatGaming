Rails.application.routes.draw do

  post "/graphql", to: "graphql#execute"

  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"

  # #route to react application
  get 'home' => 'pages#home'

end
