<template>
  <div>
    <div class="balanceCoinSection">
        残高: <h2><b>{{ this.balance }} Wei</b></h2>
    </div>
    <div class="sendCoinSection">
      <p>保存する画像を選択</p>
      <form>
        <div class="form-group row" style="margin-top: 0.5rem">
          <label for="inputPassword" class="col-2 col-form-label"><b>参照</b></label>
          <input type="file" @change="onSelectFile" id="exampleFormControlFile1">
        </div>
      </form>
      <img :src="this.selectImg">
    </div>
  </div>
</template>

<script>
import Eth from '../ethereum'

export default {
  name: 'Main',
  data () {
    return {
      inputId: '',
      balance: 0,
      selectImg: ''
    }
  },
  created: function () {
    var ethereum = new Eth()
    ethereum.getEthBalance().then(value => {
      this.balance = value
    })
  },
  mounted: {
  },
  methods: {
    /**
     * select file on load
     * @param e File
     */
    onSelectFile (e) {
      const image = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = () => {
        this.selectImg = reader.result
      }
    }
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
