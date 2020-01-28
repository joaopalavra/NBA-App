Rails.application.routes.draw do
	namespace :api do
    	namespace :v1 do
		  get 'teams/index'
		  get '/show/:id', to: 'teams#show'
		  get 'players/index'
		  get '/show/:id', to: 'players#show'
	  end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  
end
