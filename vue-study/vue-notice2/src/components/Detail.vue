<template>
    <div>
        <div>{{data.writer}}</div>
        <div>{{data.title}}</div>
        <div>{{data.content}}</div>
        <button @click="updateData">수정</button>
        <button @click="deleteData">삭제</button>
    </div>
</template>
<script>
import data from '@/data'

export default {
    name: 'Detail',
    data() {
        //contentId는 각 글의 index값을 가져옴
        const index = this.$route.params.contentId
        return {
            data: data[index],
            index
        }
    },
    methods: {
        deleteData() {
            data.splice(this.index, 1)
            this.$router.push({
                path: '/'
            })
        },
        //글쓰기 폼으로 이동
        updateData(index) {
            this.$router.push({
                name: 'Create',
                params: {
                    contentId: this.index
                }
            })
        },
    }
}
</script>