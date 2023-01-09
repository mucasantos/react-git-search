import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList({ repos }) {
    console.log(repos)
    return (
        <div className='ronded-lg shadow-lg card bg-base-100'>
            <div className="card-body">
                <h2 className='text-3xl font-bold my-4 card-title'>
                    Top Repositories
                </h2>
                {repos.map((repo) => (
                    <RepoItem key={repo.id} item={repo}/>
                ))}
            </div>
        </div>
    )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList