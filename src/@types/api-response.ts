export interface IRepositoriesResponse {
  objects: IRepository[]
  total: number
  time: string
}

export interface IRepository {
  package: IPackage
  score: IScore
  searchScore: number
  flags?: IFlags
}

export interface IPackage {
  name: string
  scope: string
  version: string
  description: string
  keywords?: string[]
  date: string
  links: ILinks
  publisher: IUser
  maintainers: IUser[]
  author?: IAuthor
}

export interface ILinks {
  npm: string
  homepage: string
  repository?: string
  bugs: string
}

export interface IUser {
  username: string
  email: string
}

export interface IAuthor {
  name: string
  email?: string
  username?: string
  url?: string
}

export interface IScore {
  final: number
  detail: IDetail
}

export interface IDetail {
  quality: number
  popularity: number
  maintenance: number
}

export interface IFlags {
  unstable: boolean
}
