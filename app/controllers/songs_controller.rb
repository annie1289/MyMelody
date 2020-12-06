class SongsController < ApplicationController
  before_action :set_song, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:index, :create, :update, :destroy]

  # GET /artists
  def index
    @songs = @current_user.songs
    render json: @songs, include: :artist
  end

  # GET /artists/1
  def show
    render json: @song
  end

  # POST /artists
  def create
    
    @song = Song.new(song_params)
    puts @song
    @song.user = @current_user
    puts @song.user
    if @song.save
      render json: @song, status: :created
      puts "here"
    else
      render json: @song.errors, status: :unprocessable_entity
      puts "there"
    end
  end

  def update
    if @song.update(song_params)
      render json: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @song.destroy
  end


  def find_all_songs 
    @songs = song.all
    render json: @songs
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = Song.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def song_params
      params.require(:song).permit(:name, :album, :imgURL, :artist_id)

    end
end
