// 동기
function a() {
    console.log('a')
}
function b() {
    console.log('b')
}
a() 
b()
//순서대로 출력 a b

function a() {
    setTimeout(function() {
        console.log('a')
    },1000)
}
function b() {
    console.log('b')
}
a() 
b()
//동기방식에서는 출력이 b a

function a(callback) {
    setTimeout(function () {
        console.log('a')
        callback()
    },1000)
}
function b() {
    console.log('b')
}
a(function () {
    b()
}) 
// a가 실행되고 난뒤 b가 실행되게 만든 비동기방식의 콜백함수

// 콜백함수 지옥ㅋ -> promise객체로 해결
function a(callback) {
    setTimeout(function () {
        console.log('a')
        callback()
    },1000)
}
function b(callback) {
    setTimeout(function () {
        console.log('b')
        callback()
    },1000)
}
function c(callback) {
    setTimeout(function () {
        console.log('c')
        callback()
    },1000)
}
function d(callback) {
    setTimeout(function () {
        console.log('d')
        callback()
    },1000)
}
a(function () {
    b(function () {
        c(function () {
            d()
        })
    })
})

//promise로 만든 비동기 방식
function a() {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log('a')
            resolve()
        },1000)
    }) 
}
function b() {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log('b')
            resolve()
        },1000)
    })
}
function c() {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log('c')
            resolve()
        },1000)
    })
}
function d() {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log('d')
            resolve()
        },1000)
    })
}
/*
a().then(()=>{
    return b()
}).then(() => c())
*/
//then함수 안에 리턴을 생략하면 {}생략가능
a()
    .then(()=>b())
    .then(()=>c())
    .then(()=>d())
//await를 쓰면 그 함수를 실행 후 다음 함수 실행 근데 await를 쓸려면 async 안에 써야함
/*
await a()
await b()
await c()
d()
*/
async function asyncFunc() {
    await a()
    await b()
    await c()
    await d()
    console.log('done')
}

//reject -> 비동기코드에서 에러가 났을때 실행됨
function a() {
    return new Promise((resolve, reject)=>{
        if (isError) {
            reject(Error)
        }
        console.log('a')
        resolve('done')
    },1000)
}
//정상적으로 코드가 실행이 됐으면 a()메서드가 다실행되면 resolve()함수가 then()를 실행시킴
//에러가 난다면 reject()가 실행되면서 then()은 실행되지 않고 catch()가 실행됨
//finally() 마지막에 무조건 실행될 코드 작성하면 됨
a()
    .then((res) => {
        console.log(res)
    })
    .catch((error)=>{
        console.log(error)
        alert(error.message)
    })
    .finally(()=>{
        console.log('done!')
    })
//위 코드를 async와 await를 사용할 경우
async function asyncFunc() {
    try{
        const res = await a()
        console.log(res)
    } catch (error) {
        alert(error.message)
    } finally {
        console.log('done!')
    }
}
asyncFunc()