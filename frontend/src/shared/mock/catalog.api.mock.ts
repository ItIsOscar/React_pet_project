import CATALOG_LIST, { catalogModel, catalogListModel } from "./db/catalog.list.mock";

class CatalogApiClass {
  private readonly catalogList = CATALOG_LIST

  getAllCatalog() {
    let catalogCompiletedList: catalogModel[] = []
    for(let catalogName in this.catalogList) {
      catalogCompiletedList.push(this.catalogList[catalogName])
    }
    return catalogCompiletedList
  }

  getCatalogByName(catalogName: string): catalogModel {
    return this.catalogList[catalogName]
  }
}
let catalogAPIMock = new CatalogApiClass
export default catalogAPIMock