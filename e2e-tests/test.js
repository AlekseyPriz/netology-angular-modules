const expext = require('chai').expect;

describe('e2e тесты приложение myApp', function() {
  it('Первая ссылка имеет текст "-view1-" ', function() {

    browser.get('http://localhost:8000');
    let list = element.all(by.repeater('item in menu'));
    expect(list.first().getText()).toEqual('-view1-');

  });

  it('Активная ссылка "-view1-" имеет класс ".ng-binding.active" ', function() {

    browser.get('http://localhost:8000/#/view1');
    let child = element(by.css('.ng-scope')).$('.ng-binding.active');
    expect(child.getText()).toBe('-view1-');

  });

  it('По адрессу /myaccount открывается форма" ', function() {

    browser.get('http://localhost:8000/#/myaccount');
    expect(element(by.id('userForm')).isPresent()).toBe(true);

  });

  it('Все Input по адрессу /myaccount имеют атрибут "required" ', function() {

    browser.get('http://localhost:8000/#/myaccount');

    let inputName = element(by.id('inputName'));
    expect(inputName.getAttribute('required')).toBeTruthy();

    let inputEmail = element(by.id('inputEmail'));
    expect(inputEmail.getAttribute('required')).toBeTruthy();

    let inputPhonenomber = element(by.model('user.phone'));
    expect(inputPhonenomber.getAttribute('required')).toBeTruthy();

  });

  it('Показано 5 покемонов', function() {

    browser.get('http://localhost:8000/#/view1');
    let pokemonList = element.all(by.repeater('pokemon in pokemons'));
    expect(pokemonList.count()).toBe(5);


  });

  it('Показан 1 покемон', function() {

    browser.get('http://localhost:8000/#/view1');
    element(by.model('myQuery')).sendKeys('Pik');
    let pokemonList = element.all(by.repeater('pokemon in pokemons'));
    expect(pokemonList.count()).toBe(1);

  });

});



