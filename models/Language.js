const mongoose = require("mongoose");

const LanguageSchema = new mongoose.Schema({
  language: [
    {
      en: [
        {
          face_parts_names: [
            {
              hair: [
                { text: String},
                { voice: String},
              ],

              eyes: [
                { text: String},
                { voice: String},
              ],

              ears: [
                { text: String},
                { voice: String},
              ],

              nose: [
                { text: String},
                { voice: String},
              ],

              cheeks: [
                { text: String},
                { voice: String},
              ],

              mouth: [
                { text: String},
                { voice: String},
              ],
            },
          ],
        },
      ],

      he: [
        {
          face_parts_names: [
            {
              hair: [
                { text: String},
                { voice: String},
              ],

              eyes: [
                { text: String},
                { voice: String},
              ],

              ears: [
                { text: String},
                { voice: String},
              ],

              nose: [
                { text: String},
                { voice: String},
              ],

              cheeks: [
                { text: String},
                { voice: String},
              ],

              mouth: [
                { text: String},
                { voice: String},
              ],
            },
          ],
        },
      ],

      ru: [
        {
          face_parts_names: [
            {
              hair: [
                { text: String},
                { voice: String},
              ],

              eyes: [
                { text: String},
                { voice: String},
              ],

              ears: [
                { text: String},
                { voice: String},
              ],

              nose: [
                { text: String},
                { voice: String},
              ],

              cheeks: [
                { text: String},
                { voice: String},
              ],

              mouth: [
                { text: String},
                { voice: String},
              ],
            },
          ],
        },
      ],

      fr: [
        {
          face_parts_names: [
            {
              hair: [
                { text: String},
                { voice: String},
              ],

              eyes: [
                { text: String},
                { voice: String},
              ],

              ears: [
                { text: String},
                { voice: String},
              ],

              nose: [
                { text: String},
                { voice: String},
              ],

              cheeks: [
                { text: String},
                { voice: String},
              ],

              mouth: [
                { text: String},
                { voice: String},
              ],
            },
          ],
        },
      ],

      es: [
        {
          face_parts_names: [
            {
              hair: [
                { text: String},
                { voice: String},
              ],

              eyes: [
                { text: String},
                { voice: String},
              ],

              ears: [
                { text: String},
                { voice: String},
              ],

              nose: [
                { text: String},
                { voice: String},
              ],

              cheeks: [
                { text: String},
                { voice: String},
              ],

              mouth: [
                { text: String},
                { voice: String},
              ],
            },
          ],
        },
      ],

      ar: [
        {
          face_parts_names: [
            {
              hair: [
                { text: String},
                { voice: String},
              ],

              eyes: [
                { text: String},
                { voice: String},
              ],

              ears: [
                { text: String},
                { voice: String},
              ],

              nose: [
                { text: String},
                { voice: String},
              ],

              cheeks: [
                { text: String},
                { voice: String},
              ],

              mouth: [
                { text: String},
                { voice: String},
              ],
            },
          ],
        },
      ],
    },
  ],
});

module.exports = Language = mongoose.model("language", LanguageSchema);
