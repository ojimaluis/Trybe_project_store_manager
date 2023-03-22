const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/db/connection');
const { productsListMock } = require('./mocks/products.model.mock');
const { productsModel } = require('../../../src/models');

const { expect } = chai;

describe('Teste de unidade do products.Model', () => {
  describe('Listando todos os produtos', () => { 
    it('Deve retornar o estado 200 e a lista', async () => {
    sinon.stub(connection, 'execute').resolves([productsListMock]);
    const result = await productsModel.findAllProducts();

    expect(result).to.be.deep.equal(productsListMock);
  });
  });
  describe('Listando produto por id', () => { 
    it('Deve retornar o estado 200 e o produto', async () => {
    sinon.stub(connection, 'execute').resolves([[productsListMock[1]]]);

    const result = await productsModel.findProductById(2);

    expect(result).to.be.deep.equal(productsListMock[1]);
  });
  });

  afterEach(function () {
    sinon.restore();
  });
});