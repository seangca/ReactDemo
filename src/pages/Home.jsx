const loremIpsum = [`
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor massa eu consectetur pulvinar. Nam in sodales risus. Ut dapibus felis sodales bibendum tempus. Nunc sed consectetur erat. Ut tortor arcu, rutrum quis mollis eget, iaculis at lectus. Ut lacus libero, ultrices id venenatis eget, pharetra eu sapien. Suspendisse vehicula orci et auctor pellentesque. Vestibulum ut consectetur lacus, ac dictum massa. Vestibulum maximus ligula sit amet nunc suscipit interdum. In eros risus, congue ut quam aliquam, mollis vestibulum est. Duis vulputate imperdiet eros, ac pretium quam vestibulum sit amet. Praesent sit amet suscipit ante, ut interdum felis.`,
  `Aliquam gravida a odio sit amet semper. Ut sed nibh velit. Integer quis porttitor metus. Integer vitae efficitur metus. Nunc enim leo, tincidunt quis mattis a, ullamcorper et ante. Nam egestas nisl tortor, id suscipit purus eleifend vel. Maecenas fermentum ipsum id risus ornare tempor. Pellentesque sit amet lectus elit. Aliquam ut placerat nibh, a accumsan erat. Maecenas ut hendrerit augue. Cras vitae tincidunt nulla.
  `,
  `Nulla facilisi. Nulla mattis justo ipsum, et volutpat mi porta sed. Vivamus ullamcorper, urna in placerat facilisis, urna orci commodo ipsum, non bibendum nisl sem non augue. Nam ut commodo ligula. Mauris porttitor turpis gravida, porttitor lectus nec, condimentum ante. Sed mattis velit finibus est iaculis consectetur. Aliquam non tellus erat. Quisque eu orci semper, vehicula orci a, suscipit ipsum. Nullam pretium pharetra magna, non fringilla erat placerat et. Cras sit amet mi non libero sodales porttitor vitae et purus. Curabitur tempor semper sapien, quis auctor nibh pulvinar ac.`,
  `Quisque vitae nulla magna. Maecenas egestas eget lectus id lacinia. Pellentesque in velit vitae dolor mattis eleifend. Mauris nec erat dui. Donec nec fringilla lectus, in sodales magna. Cras tristique malesuada ipsum ut vulputate. Suspendisse eu vestibulum libero, quis finibus sem. Morbi varius odio ut mi tincidunt, vitae laoreet lacus sagittis. Donec facilisis, lacus id ornare hendrerit, lectus velit luctus lacus, et consequat enim ex semper purus. Cras at justo velit. Mauris facilisis dui sed odio rutrum, nec maximus nulla lobortis. Aliquam eu risus viverra, feugiat sapien non, vulputate ante. Vestibulum quis tortor tortor. Mauris accumsan massa vel est gravida, convallis sollicitudin velit dapibus. Donec eu vehicula metus.`,
  `Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lobortis elit nulla, nec ornare lorem dictum ac. Donec sollicitudin diam quis nibh fringilla, a ornare ex lacinia. Pellentesque semper, quam vel eleifend consectetur, lacus nisi convallis neque, ut posuere arcu nunc non turpis. Cras varius et est et mollis. Sed et quam vitae quam convallis auctor vitae nec sem. Fusce auctor mollis mollis. Sed quis nisl condimentum, ultrices mauris id, tincidunt felis. Donec sagittis, leo quis elementum mollis, nunc risus rutrum enim, a lacinia nunc libero ut dolor. Nunc vel ligula pharetra, auctor tellus ut, porta risus.
`]

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col justify-center">
      <div className="flex flex-row justify-center items-center">
        <span className="text-2xl text-black">
          <strong>Home</strong>
        </span>
      </div>
      <div className="flex flex-col justify-center my-10">
        {loremIpsum && loremIpsum.map((i, index) => (
          <span key={index} className="text-md text-black px-10 py-2">
            {i}
          </span>
        ))}
      </div>
    </div>
  )
}