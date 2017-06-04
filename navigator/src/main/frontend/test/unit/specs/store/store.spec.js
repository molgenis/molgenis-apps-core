import * as api from 'src/molgenisApi'
import store from 'src/store'

describe('store', function () {
  describe('initial state', function () {
    it('should have a empty package list', () => {
      expect(store.state.packages).to.be.empty
    })
  })

  describe('actions', () => {
    let get = sinon.stub(api, 'get')
    afterEach(() => get.reset())

    describe('GET_PACKAGES', function () {
      it('should fetch the packages and store them in the state', function (done) {
        // mock api call
        const package1 = {id: 'pack1', label: 'packLabel1'}
        const packages = package1
        const apiResponse = {
          items: [packages]
        }
        let getSuccess = Promise.resolve(apiResponse)
        get.onFirstCall().returns(getSuccess)

        // execute
        store.dispatch('GET_PACKAGES', 'my-test-query')

        // verify
        getSuccess.then(function () {
          expect(store.state.packages[0]).to.equal(package1)
          done()
        })
      })

      it('should pass the error message to the state when the get fails', function (done) {
        // mock api response
        let getFail = Promise.reject({
          errors: [{message: 'an error yo'}]
        })
        get.onFirstCall().returns(getFail)

        // execute
        store.dispatch('GET_PACKAGES', 'my-test-query')
          .catch(function () {
            expect(store.state.error).to.equal('an error yo')
            done()
          })
      })
    })

    describe('GET_ENTITIES', function () {
      it('should fetch the entities and store them in the state', function (done) {
        const entities = [{id: 'e1', label: 'el1'}]
        const apiResponse = {
          items: entities
        }
        let getSuccess = Promise.resolve(apiResponse)
        get.onFirstCall().returns(getSuccess)

        // execute
        store.dispatch('GET_ENTITIES', 'my-test-query')

        // verify
        getSuccess.then(function () {
          expect(store.state.entities[0].id).to.equal('e1')
          expect(store.state.entities[0].label).to.equal('el1')
          expect(store.state.entities[0].description).to.equal(undefined)
          expect(store.state.entities[0].type).to.equal('entity')
          done()
        })
      })

      it('should set the error when the fetch fails', function (done) {
        // mock api response
        let getFail = Promise.reject({
          errors: [{message: 'error on entity query'}]
        })
        get.onFirstCall().returns(getFail)

        // execute
        store.dispatch('GET_ENTITIES', 'my-test-query')
          .catch(function () {
            expect(store.state.error).to.equal('error on entity query')
            done()
          })
      })
    })
  })
})
