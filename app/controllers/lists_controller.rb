class ListsController < ApplicationController
  
  def index
    respond_with List.all
  end

end