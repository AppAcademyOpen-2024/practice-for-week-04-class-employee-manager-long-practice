const chai = require('chai');
const expect = chai.expect;

const Employee = require('../employee');
const Manager = require('../manager');

const hobbes = new Manager('Hobbes', 1000000, 'Founder');
const calvin = new Manager('Calvin', 130000, 'Director', hobbes);
const susie = new Manager('Susie', 100000, 'TA Manager', calvin);
const lily = new Employee('Lily', 90000, 'TA', susie);
const clifford = new Employee('Clifford', 90000, 'TA', susie);

describe('Bonuses of 0.05', () => {
  it('Hobbes bonus should be 70500', () => {
    expect(hobbes.calculateBonus(0.05)).to.equal(70500);
  });
  it('Calvin bonus should be 70500', () => {
    expect(calvin.calculateBonus(0.05)).to.equal(20500);
  });
  it('Susie bonus should be 70500', () => {
    expect(susie.calculateBonus(0.05)).to.equal(14000);
  });
  it('Lily bonus should be 70500', () => {
    expect(lily.calculateBonus(0.05)).to.equal(4500);
  });
  it('Clifford bonus should be 70500', () => {
    expect(clifford.calculateBonus(0.05)).to.equal(4500);
  });
});
