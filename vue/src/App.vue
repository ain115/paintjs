<template>
  <div id="app">
        <h1>튜토리얼Todo 리스트</h1>
        <label v-for="label in options" :key="label.index">
        <input type="radio"
            v-model="current"
            v-bind:value="label.value">{{ label.label }}
        </label>
    <table>
        <!-- 테이블 헤더 -->
        <thead>
            <tr>
                <th class="id">ID</th>
                <th class="comment">내용</th>
                <th class="state">상태</th>
                <th class="button">-</th>
            </tr>
        </thead>
        <tbody>
        <!-- [1] 여기에 <tr>을 사용해서 Todo 요소를 반복 출력 -->
        <tr v-for="item in computedTodos"
            v-bind:key="item.id"
            v-bind:class="{done:item.state}">
            <th class="id">{{item.id}}</th>
            <th class="comment">{{item.comment}}</th>
            <th class="state">
                <button v-on:click="doChangeState(item)">
                    {{ labels[item.state] }}
                </button>
            </th>
            <th class="button">
                <button v-on:click="doRemove(item)">
                     제거
                </button>
            </th>
        </tr>

        </tbody>
    </table>
    <p>※ 제거 버튼은 컨트롤 키를 누르고 클릭하세요.</p>
    <h2>새로운 작업 추가</h2>
    <form class="add-form" v-on:submit.prevent="doAdd">
        <!-- 내용 입력 양식 -->
        내용 <input type="text" ref="comment">
        <!-- 추가 버튼 목업 -->
        <button type="submit">추가</button>
    </form>
  </div>
</template>

<script>
const STORAGE_KEY = 'todos-vuekr-demo'
const todoStorage = {
  fetch: function() {
    const todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
export default {
  data() {
    return {
        todos: [],
        options: [
            { value: -1, label: '전체' },
            { value: 0,  label: '작업 중' },
            { value: 1,  label: '완료' }
        ],
        // 선택되어 있는 options의 value를 저장하기 위한 데이터
        // 초깃값은 -1(따라서 "전체")
        current: -1
    };
  },
  computed: {
    computedTodos() {
      // 데이터 current가 -1이라면 전체 출력
      // 이 이외의 경우에는 current와 state의 상태를 기반으로 필터링
      return this.todos.filter((el) => {
        return this.current < 0 ? true : this.current === el.state
      }, this)
    },
    labels() {
        return this.options.reduce((a, b) => {
        return Object.assign(a, { [b.value]: b.label })
        }, {})
        // 키를 기반으로 쉽게 볼 수 있도록 다음과 같이 변환합니다.
        // {0: '작업 중', 1: '완료', -1: '전체'}
    }
  },
  watch: {
    // 옵셥을 사용하는 경우, 객체 형식으로 지정합니다.
    todos: {
      // 매개 변수로는 속성의 변경 후 값이 들어옵니다.
      handler: function(todos) {
        todoStorage.save(todos)
      },
      // deep 옵션으로 내부의 데이터까지 감시
      deep: true
    }
  },
  methods: {
     // ToDo 추가 처리
    doAdd(event, value) {
      // ref로 이름이 붙어 있는 요소를 참조합니다.
      const comment = this.$refs.comment
      // 입력이 없다면 아무 것도 하지 않음 return
      if (!comment.value.length) {
        return
      }
      // { 새로운 ID, 내용, 작업 상태 }
      // 형태의 객체를 todos 리스트에 추가
      // 작업 상태 'state'는 디폴트로 '작업 중 = 0'으로 생성
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })
      // 입력 양식의 내용 제거하기
      comment.value = ''
    },
    // 상태 변경 처리
    doChangeState(item) {
      item.state = item.state ? 0 : 1
    },
    // 제거 처리
    doRemove(item) {
      var index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    }
  },
  created() {
    // 인스턴스 생성 때 자동으로 fetch() 기능 실행
    this.todos = todoStorage.fetch()
  }
};
</script>

<style>

</style>