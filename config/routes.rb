Rails.application.routes.draw do
	
  get 'teams/index'
  get '/show/:id', to: 'teams#show'
  get 'players/index'
  get 'games/index'
  get '/show/:id', to: 'games#show'
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  
end
