####  **CSS-IN-JS**

##### 为什么会有 **CSS-IN-JS**

CSS-IN-JS 是 WEB 项⽬中将 CSS 代码捆绑在 JavaScript 代码中的解决⽅案.

这种⽅案旨在解决 CSS 的局限性, 例如缺乏动态功能, 作⽤域和可移植性.

##### CSS-IN-JS ⽅案的优点

1. 让 CSS 代码拥有独⽴的作⽤域, 阻⽌ CSS 代码泄露到组件外部, 防⽌样式冲突

2. 让组件更具可移植性, 实现开箱即⽤, 轻松创建松耦合的应⽤程序

3. 让组件更具可重⽤性, 只需编写⼀次即可, 可以在任何地⽅运⾏. 不仅可以在同⼀应⽤程序中重⽤组件, ⽽且可以在使⽤相同框架构建的其他应⽤程序中重⽤组件

4. 让样式具有动态功能, 可以将复杂的逻辑应⽤于样式规则, 如果要创建需要动态功能的复杂UI, 它是理想的解决⽅案.

##### CSS-IN-JS ⽅案的缺点

1. 为项⽬增加了额外的复杂性

2. ⾃动⽣成的选择器⼤⼤降低了代码的可读性

#### **Emotion** 库

#####  Emotion 介绍

Emotion 是⼀个旨在使⽤ JavaScript 编写 CSS 样式的库.

npm install @emotion/core @emotion/styled

#####  css 属性⽀持

1. JSX Pragma

   通知 babel, 不再需要将 jsx 语法转换为 React.createElement ⽅法, ⽽是需要转换为 jsx ⽅法. 

   ![image-20210218112813033](images/image-20210218112813033.png)

   React 17 引用

   ```js
   /** @jsxRuntime classic */
   
   /** @jsx jsx */
   
   import { jsx } from '@emotion/react';
   ```

   React16 引用

   ```js
   /** @jsx jsx */
   import { jsx } from '@emotion/core';
   ```

   

   #####  Babel Preset

   1. npm run eject 

   2. 安装babel依赖

      ```
      npm install @emotion/babel-preset-css-prop
      ```

   3. 在 package.json ⽂件中找到 babel 属性, 加⼊如下内容

      ```js
       "babel": {
          "presets": [
            "react-app",
            "@emotion/babel-preset-css-prop"
          ]
        }
      ```

      

   ##### css()方法

   1. String Styles

      模板字符串调用

      ```js
      import React from 'react';
      import { css } from '@emotion/react'
      
      const style = css`
      width:100px;
      height:200px;
      background: skyblue`
      
      function App() {
        return (
          <div css={style}>react work!</div>
        );
      }
      
      export default App;
      
      ```

      普通函数调用

      ```js
      import React from 'react';
      import { css } from '@emotion/react'
      
      const style = css({
        width:200,
        height: 200,
        background: 'pink'
      })
      
      function App() {
        return (
          <div css={style}>react work!</div>
        );
      }
      
      export default App;
      
      ```

   2. css属性优先级

      props 对象中的 css 属性优先级⾼于组件内部的 css 属性

      在调⽤组件时可以在覆盖组件默认样式

   3. Styled Components 样式化组件

      样式化组件就是⽤来构建⽤户界⾯的，是 emotion 库提供的另⼀种为元素添加样式的⽅式。

      - 创建样式化组件

        ```js
        import styled from '@emotion/styled'
        ```

        string styles

        ```js
        const Button = styled.button`
        width: 100px;
        height: 30px;
        background: pink;
        `;
        ```

        Object styles

        ```js
        const Container = styled.div({
          width: 1000,
          background: 'pink',
          margin: '0 auto'
        });
        ```

      - 根据props属性覆盖样式

        String styles

        ```js
        const Button = styled.button`
        width: 100px;
        height: 30px;
        background: ${props => props.bgColor || 'pink'};
        `;
        ```

        Object styles

        (1)

        ```js
        const Container = styled.div(props=>({
          width: props.w || 1000,
          background: 'pink',
          margin: '0 auto'
        }));
        ```

        (2)

        ```js
        const Container = styled.div({
          width:800,
          background: 'pink'
        },props=>({
          width: props.w,
          background: props.bgColor
        }))
        ```

      - 为任何组件添加样式

        string styles

        ```js
        
        function Demo ({className}) {
          return <div className={className}>Demo</div>;
        }
        
        const Fancy = styled(Demo)`
        color: red;
        `
        ```

        Object styles

        ```js
        const Fancy2 = styled(Demo)({
          background: 'tomato',
          color: 'white'
        })
        ```

      - 通过父组件设置组件样式

        String styles

        ```js
        import React from 'react';
        import styled from '@emotion/styled'
        
        const Child = styled.div`
          color: red;
        `;
        
        const Parent = styled.div`
        ${Child} {
          color: green
        }`;
        function App() {
          return (
           <div>
            <Child>Child</Child>
            <Parent><Child>child parent</Child></Parent>
            </div>
          );
        }
        
        export default App;
        
        ```

        Object Styles

        ```js
        import React from 'react';
        import styled from '@emotion/styled'
        
        const Child = styled.div({
          color: 'red'
        })
        
        const Parent = styled.div({
          [Child]: {
            color: 'pink'
          }
        })
        
        function App() {
          return (
           <div>
            <Child>Child</Child>
            <Parent><Child>child parent</Child></Parent>
            </div>
          );
        }
        
        export default App;
        
        ```

      -  嵌套选择器 &

        & 表示组件本身.

        ```js
        const Container = styled.div`
        width: 200px;
        height: 200px;
        background: skyblue;
        color: pink;
        &:hover {
          background: pink;
        }
        & > span {
          color: yellow;
        }
        `;
        ```

      - as 属性

        要使⽤组件中的样式, 但要更改呈现的元素, 可以使⽤ as 属性.

        ```js
        import React from 'react';
        import styled from '@emotion/styled'
        
        const Button = styled.button`
        color:red;
        `;
        
        function App() {
          return (
           <div>
          <Button as="a" href="#">button</Button>
            </div>
          );
        }
        
        export default App;
        
        ```

      - 样式组合

        在样式组合中，后调用的样式优先级高于先调用的样式。

        ```js
        import React from 'react';
        import { css } from '@emotion/react'
        
        const base =css`
        background: tomato;
        color: white;
        `;
        const danger =css`
        background: red;
        color: black;
        `;
        function App() {
          return (
           <div css={[base, danger]}>
           我的测试数据。。。。
            </div>
          );
        }
        
        export default App;
        
        ```

      - 全局样式

        ```js
        import React from 'react';
        import { css, Global } from '@emotion/react'
        import Demo from './demo';
        
        const styles = css`
        body {
          margin: 0;
        }
        a {
          text-decoration: none;
          color: red;
        }
        `;
        function App() {
          return (
           <div>
             <Global styles={styles} />
           <a href="#">我的测试数据。。。。</a>
           <Demo />
            </div>
          );
        }
        
        export default App;
        
        ```

      - 关键帧动画

        ```js
        import React from 'react';
        import { css, keyframes } from '@emotion/react';
        
        const move = keyframes`
        0% {
          background: skyblue;
          left: 0;
          top: 0;
        }
        100% {
          background: tomato;
          left: 600px;
          top: 300px;
        }
        `;
        
        const box =css`
        width: 100px;
        height: 100px;
        position: absolute;
        animation: ${move} 2s ease alternate;
        `;
        function App() {
          return (
           <div css={box}>
            </div>
          );
        }
        
        export default App;
        
        ```

      - 主题

        将 ThemeProvider 放置在视图在最外层

        react17之前 用emotion-theming

        ```
        npm install emotion-theming
        ```

        react17之后引用

        ```
        import { useTheme, ThemeProvider, withTheme } from '@emotion/react'
        ```

        

      - Styled Components

      

      ​        

​    

