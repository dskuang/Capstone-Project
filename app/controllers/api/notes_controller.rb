class Api::NotesController < ApplicationController
  def index
    @notes = Notes.all
    render 'index'
  end

  def show
    @note = Note.find(params[:id])
    render "show"
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render :json => @note
    else
      render :json => @note.errors.full_messages, :status => 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy if @note
    render :json => {}
  end

  def note_params
    params.require(:note).permit(:note_text, :post_id)
  end

end
