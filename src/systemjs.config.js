/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    transpiler: 'typescript',
    typescriptOptions: { emitDecoratorMetadata: true },
    
    paths: {
      // paths serve as alias
      'npm:': '../node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      'angular2-tree-component': 'node_modules/angular2-tree-component/dist/angular2-tree-component.umd.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      // typescript
      'typescript': 'npm:typescript/lib/typescriptServices.js',
      // d3
      'd3': 'npm:d3/build/d3.js',
      'd3-selection': 'npm:d3-selection/build/d3-selection.js',
      'd3-collection': 'npm:d3-collection/build/d3-collection.js',
      'd3-time-format': 'npm:d3-time-format/build/d3-time-format.js',
      'd3-time': 'npm:d3-time/build/d3-time.js',
      'd3-format': 'npm:d3-format/build/d3-format.js',
      'd3-interpolate': 'npm:d3-interpolate/build/d3-interpolate.js',
      'd3-color': 'npm:d3-color/build/d3-color.js',
      'd3-path': 'npm:d3-path/build/d3-path.js',
      'd3-scale': 'npm:d3-scale/build/d3-scale.js',
      'd3-shape': 'npm:d3-shape/build/d3-shape.js',
      'd3-array': 'npm:d3-array/build/d3-array.js',
      'd3-axis': 'npm:d3-axis/build/d3-axis.js',
      'd3-dsv': 'npm:d3-dsv/build/d3-dsv.js',
      // drag and drop
      'dragula': 'npm:dragula/dist/dragula.min.js',
      'ng2-dragula': 'npm:ng2-dragula'
    },
    // packages tells the System loader how to load when no filename and/or no extension is given
    packages: {
      app: { main: './main', defaultExtension: 'ts' },
      rxjs: { defaultExtension: 'js' },
      'ng2-dragula':  { main: 'index.js', defaultExtension: 'js' }
    }
  });
})(this);
