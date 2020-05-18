<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
import data from '@/data'
//글번호 내림차순으로 정렬
let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
//data에 있는 값을 모든 값을 출력하게 하는 코드
items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})
export default {
  name: 'Board',
  data() {
    return {
      fields: [
        {
          key: 'content_id',
          label: '글번호',
        },
        {
          key: 'title',
          label: '제목',
        },
        {
          key: 'created_at',
          label: '등록일'
        },
        {
          key: 'user_name',
          label: '글쓴이'
        },
      ],
      items
    }
  }
}
</script>