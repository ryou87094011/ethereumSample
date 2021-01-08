<template>
  <div>
    <div class="balanceCoinSection">
        残高: <h2><b>100,000 ETH</b></h2>
    </div>
    <div class="sendCoinSection">
      <p>誰かにコインを送る</p>
      <form>
        <div class="form-group row" style="margin-top: 0.5rem">
          <label for="inputPassword" class="col-2 col-form-label"><b>宛先</b></label>
          <input
            v-model="inputId"
            type="txt"
            class="col-7 form-control"
            id="inputID"
          />
          <button
            type="button"
            class="btn btn-primary col-2"
            style="margin-left: 1rem"
          >
            <b>Send</b>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      inputId: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.sendCoinSection {
  position: relative;
  z-index: 10;
  padding: 60px;
  background: #7ad2cc;
  width: 94%;
  margin-left: auto;
  color: white;
}

.balanceCoinSection {
  position: relative;
  z-index: 10;
  padding: 60px;
  background: #7ad2cc;
  width: 54%;
  margin-left: auto;
  margin-bottom: 1.5rem;
  color: white;
}
</style>
