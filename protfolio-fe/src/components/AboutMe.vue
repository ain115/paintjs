<template>
    <div>
        header.main_home(ref="mainHome")
        <div class="about_section">
            <div class="h2_background">
                <h2 data-split="ABOUT ME">ABOUT ME</h2>
            </div>
            <div class="about_bundle">
                <div class="me">
                    <figure><img class="me_img" src="@/assets/me.jpg"></figure>
                    <pre class="text">
순수하지만 눈치가 빠름

저를 처음 본 사람들은 제 이미지가 순수하다고 이야기합니다. 순수라는 단어를 생각하면
아무것도 모르는 아이같은 사람이 순수한 사람이라고 생각합니다.

하지만 전 겉모습은 아이같이 해맑은 사람일지라도 눈치가 빨라서 아무것도 모르는 아이같은 사람은 아닙니다.
저의 이런 이면적이부분 덕분에 어떠한 그룹에 들어간다해도 아이같은 해맑음으로 쉽게 사람들과 친해지고
사람들과 어울릴때는 빠른 눈치로 제가 해야할 일들을 찾아서 하는 사람입니다.
                    </pre>
                </div>
                <div class="skills">
                    <h3>SKILLS</h3>
                    <ul class="skill_list">
                        <li>
                            <p>HTML</p>
                            <div class="circle html" @click="circle('html')">
                                <div class="slice">
                                <div class="bar"></div>
                                <div class="fill"></div>
                            </div>
                                <p class="click_percent" v-show="show">click!</p>
                                <p class="percent" v-show="show2"><span>85</span>%</p>
                            </div>
                        </li>
                        <li>
                            <p>CSS</p>
                            <div class="circle css" @click="circle('css')">
                                <div class="slice">
                                <div class="bar"></div>
                                <div class="fill"></div>
                            </div>
                                <p class="click_percent" v-show="show3">click!</p>
                                <p class="percent" v-show="show4"><span>70</span>%</p>
                            </div>
                        </li>
                        <li>
                            <p>JAVASCRIPT</p>
                            <div class="circle javascript" @click="circle('javascript')">
                                <div class="slice">
                                <div class="bar"></div>
                                <div class="fill"></div>
                            </div>
                                <p class="click_percent" v-show="show5">click!</p>
                                <p class="percent" v-show="show6"><span>30</span>%</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      show: true,
      show2: false,
      show3: true,
      show4: false,
      show5: true,
      show6: false
    }
  },
  methods: {
    circle (element) {
      const percent = document.querySelector('.circle.' + element + ' .percent span').innerText
      let degrees = percent / 100 * 360
      if (degrees > 360) degrees = 360
      if (degrees > 180) {
        document.querySelector('.' + element + ' .slice').style.clip = 'rect(auto, auto, auto, auto)'
        document.querySelector('.' + element + ' .fill').style.display = 'block'
      }
      document.querySelector('.' + element + ' .bar').style.transform = 'rotate(' + degrees + 'deg)'
      if (element === 'html') {
        this.show = false
        this.show2 = true
      } else if (element === 'css') {
        this.show3 = false
        this.show4 = true
      } else {
        this.show5 = false
        this.show6 = true
      }
    }
  }
}
</script>
<style src="@/assets/style.css" scope>
</style>
