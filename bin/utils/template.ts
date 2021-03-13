const ejs = require('ejs');

interface TemplateData {
  projectName: string;
}

module.exports = {
  render: function(content: string, data: TemplateData) {
    return ejs.render(content, data);
  },
};
