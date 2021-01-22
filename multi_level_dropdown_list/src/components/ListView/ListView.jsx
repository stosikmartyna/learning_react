import React, { useEffect, useState } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import { MinusSquare, PlusSquare } from '../icons';
import { StyledTreeItem } from '../StyledTreeItem/StyledTreeItem';

export const ListView = () => {
  const [responseData, setResponseData] = useState(undefined);

  const getCompanyData = async() => {
    fetch('list_data.json')
      .then(response => response.json())
      .then(response => setResponseData(response))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getCompanyData()
  }, []);

  return (
    <TreeView
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
    >
      {responseData && (
        <StyledTreeItem nodeId={responseData.companyData.name} label={responseData.companyData.name}>
          {responseData?.companyData.subdivisions.map((subdivision, index) => {
            return (
              <StyledTreeItem key={index} nodeId={subdivision.name} label={subdivision.name}>
                {subdivision.teams?.map((team, index) => {
                  return (
                    <StyledTreeItem key={index} nodeId={team.name} label={team.name}>
                      {team.subdivisions?.map((subdivision, index) => {
                        return (
                          <StyledTreeItem key={index} nodeId={subdivision} label={subdivision} />
                        )
                      })}
                    </StyledTreeItem>
                  )
                })}
              </StyledTreeItem>
            )
          })}
        </StyledTreeItem>
      )}
    </TreeView>
  );
}
