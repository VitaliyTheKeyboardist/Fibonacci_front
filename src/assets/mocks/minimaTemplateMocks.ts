import testImage from "../templates/minimaTemplate/testSLide1.png"
import testImage2 from "../templates/classicTemplate/testImage2.png"

export interface ISlide {
  slideTitle: string
  slideText: string
  slideImage: string[]
}

export interface ITemplateContent {
  templateName: string
  title: string
  finishTitle: string
  slides: ISlide[]
}

export const templateContent = {
  templateName: "minimaTemplate",
  title: "тема Презентации",
  finishTitle: "Спасибо за внимание",
  slides: [
    {
      title: "титульный слайд",
      text: ``,
      images: [],
    },
    {
      title: "тема слайда1",
      text: `текст слайда. Минимализм - это стиль, который ценит простоту и функциональность.
        Он исключает лишние детали и акцентирует внимание на самом
        главном. В дизайне минимализм фокусируется на чистоте линий,
        простых формах и нейтральных цветах. Это позволяет создать
        пространство, которое не отвлекает от содержания и делает акцент
        на его значимости. Минимализм также широко применяется в
        интерьере, где он помогает создать уютную и комфортную атмосферу
        без излишеств. В повседневной жизни минимализм позволяет людям
        избавиться от ненужных вещей и сосредоточиться на том, что
        действительно важно.`,
      images: [{ api_url: testImage, description: "" }],
    },
    {
      title: "тема слайда2",
      text: `текст слайда. Минимализм - это стиль, который ценит простоту и функциональность.
        Он исключает лишние детали и акцентирует внимание на самом
        главном. В дизайне минимализм фокусируется на чистоте линий,
        простых формах и нейтральных цветах. Это позволяет создать
        пространство, которое не отвлекает от содержания и делает акцент
        на его значимости. Минимализм также широко применяется в
        интерьере, где он помогает создать уютную и комфортную атмосферу
        без излишеств. В повседневной жизни минимализм позволяет людям
        избавиться от ненужных вещей и сосредоточиться на том, что
        действительно важно.`,
      images: [{ api_url: testImage, description: "" }],
    },
    {
      title: "тема слайда3",
      text: `текст слайда. Минимализм - это стиль, который ценит простоту и функциональность.
          Он исключает лишние детали и акцентирует внимание на самом
          главном. В дизайне минимализм фокусируется на чистоте линий,
          простых формах и нейтральных цветах. Это позволяет создать
          пространство, которое не отвлекает от содержания и делает акцент
          на его значимости. Минимализм также широко применяется в
          интерьере, где он помогает создать уютную и комфортную атмосферу
          без излишеств. В повседневной жизни минимализм позволяет людям
          избавиться от ненужных вещей и сосредоточиться на том, что
          действительно важно.`,
      images: [{ api_url: testImage, description: "" }],
    },
    {
      title: "тема слайда4",
      text: `текст слайда. Минимализм - это стиль, который ценит простоту и функциональность.
        Он исключает лишние детали и акцентирует внимание на самом
        главном. В дизайне минимализм фокусируется на чистоте линий,
        простых формах и нейтральных цветах. Это позволяет создать
        пространство, которое не отвлекает от содержания и делает акцент
        на его значимости. Минимализм также широко применяется в
        интерьере, где он помогает создать уютную и комфортную атмосферу
        без излишеств. В повседневной жизни минимализм позволяет людям
        избавиться от ненужных вещей и сосредоточиться на том, что
        действительно важно.`,
      images: [{ api_url: testImage, description: "" }],
    },
    {
      title: "тема слайда5",
      text: `текст слайда. Минимализм - это стиль, который ценит простоту и функциональность.
        Он исключает лишние детали и акцентирует внимание на самом
        главном. В дизайне минимализм фокусируется на чистоте линий,
        простых формах и нейтральных цветах. Это позволяет создать
        пространство, которое не отвлекает от содержания и делает акцент
        на его значимости. Минимализм также широко применяется в
        интерьере, где он помогает создать уютную и комфортную атмосферу
        без излишеств. В повседневной жизни минимализм позволяет людям
        избавиться от ненужных вещей и сосредоточиться на том, что
        действительно важно.`,
      images: [{ api_url: testImage, description: "" }, { api_url: testImage2, description: "" }],
    },
  ],
}
