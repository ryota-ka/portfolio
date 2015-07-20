class PagesController < ApplicationController
  def index
    today = Date.today.strftime('%Y%m%d').to_i
    birthday = Date.new(1993, 6, 7).strftime('%Y%m%d').to_i
    @age = (today - birthday) / 10_000

    @skills = Skill.all
    @awards = Award.all.order(:date)
    @links = Link.all
    @products = Product.all
  end
end
