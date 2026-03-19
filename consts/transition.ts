export const transitionSlideInOut = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 300,
      easing: 'ease-out',
      fill: 'forwards',
      pseudoElement: '::view-transition-old(root)',
    },
  )

  document.documentElement.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 300,
      easing: 'ease-out',
      fill: 'forwards',
      pseudoElement: '::view-transition-new(root)',
    },
  )
}
