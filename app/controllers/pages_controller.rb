class PagesController < ApplicationController
  def index
    @products = Product.all

    today = Date.today.strftime('%Y%m%d').to_i
    birthday = Date.new(1993, 6, 7).strftime('%Y%m%d').to_i
    age = (today - birthday) / 10_000

    @profiles = {
      birthday: "1993.06.07 (age #{age})",
      location: 'ichijoji, sakyo, kyoto',
      hometown: 'kishiwada, osaka',
      education: 'kyoto university (faculty of economics)'
    }

    @skills = Skill.all
    @awards = Award.all.order(:date)
    @links = Link.all
  end
end
