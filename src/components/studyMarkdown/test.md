# Vue.js 라이프 사이클(LifeCycle)

### 라이프 사이클이란?

어떤 Vue 인스턴스나 컴포넌트가 생성될 때, 미리 사전에 정의된 몇 단계의 과정을 거치게 되는데 이를 라이프사이클(Lifecycle)이라 합니다. 다시 말해 Vue 인스턴스가 생성된 후 우리 눈에 보여지고, 사라지기까지의 단계를 일컫는 말이다.

![VueLifeCycle.png](..%2Fimg%2FVueLifeCycle.png)

Vue 인스턴스는 크게 생성(create)되고, DOM에 부착(mount)되고, 업데이트(update)되며, 없어지는(destory) 4가지 과정을 거치게 됩니다.

이 과정에서 Vue는 각각의 단계에서, Vue를 사용하는 사람들을 위해 훅(Hook)을 할 수 있도록 API를 제공한다. 일반적으로 많이 사용하는 종류로는 beforCreate, create,  beforeMount, mounted, beforeUpdate, updated, beforeDestory, destroyed 가 있다.

### beforeCreate

가장 먼저 실행되는 beforeCreate 훅이다. Vue 인스턴스가 초기화 된 직후에 발생된다. 컴포넌트가 DOM에 추가되기도 전이어서 this.$el에 접근할 수 없습니다. 또한 data, event, watcher에도 접근힉; 전이라 data, methods에도 접근할 수 없다.

### created

create 훅에서는 data를 반응형으로 추적할 수 있게 되며 computed, methods, watch등이 활성화되어 접근이 가능하게 된다. 하지만 아직까지 DOM에는 추가되지 않은 상태입니다.

data에 직접 접근이 가능하기 때문에, 컴포넌트 초기에 외부에서 받아온 값들로 data 를 세팅해야 하거나 이벤트 리스너를 선언해야 한다면 이 단계에서 하는 것이 가장 적절하다.

### beforeMount

DOM에 부착하기 직전에 호출되는 beforeMount 훅이다. 이 단계 전에서 템플릿이 있는지 없는지 확인한 후 템플릿을 렌더링 한 상태이므로, 가상 DOM이 생성되어 있으나 실제 DOM에 부착되지 않은 상태이다.

### mounted

일반적으로 가장 많이 사용하는 mounted 훅입니다. 가상 DOM의 내용이 실제 DOM에 부착되고 난 이후에 실행되므로, this .$el을 비롯한 data, computed, methods, watch등 모든 요소에 접근이 가능하다.

### beforeDestory

해당 인스턴스가 해체되기 직전에 beforeDestory훅이 호출됩니다. 아직 해체되기 이전이므로, 인스턴스는 완전하게 작동하기 때문에 모든 속성에 접근이 가능하다. 이 단계에서는 이벤트 리스너를 해제하는 등 인스턴스가 사라지기 전에 해야할 일들을 처리하면 된다.

### destoryed

인스턴스가 해체되고 난 직후에 destoryed훅이 호출된다. 해체가 끝난 이후기 때문에, 인스턴스의 속성에 접근할 수 없다. 또한 하위 Vue 인스턴스 역시 삭제된다.]()