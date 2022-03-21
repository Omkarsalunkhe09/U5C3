export const NotFound = () => {
  return (
    <div className="notFound">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACjCAMAAADciXncAAACEFBMVEX39//09Pzx8fn4+P/29v719f3w8Pju7vbv7/fz8/vy8vru7/bz9Po5B2AKClL8+P/3//8XCVYgCVkyCF4oCFv////3/P8RCVQA4Hr69f8KAFEkCVoACVP0+f/3AFT48v46AF/00OD/AFQAAEsA4YD4q8He9e8eAFf/FmKu79KM57wACFb3EmD1tMgA6oP33uu569eZma8At3LxvNHzj67O7+RS5Jv2VoUA6XrVAFgAAEKy7NL3hqb3AE8oBmCWDFsAADqE6rYFQVoAo3AAAFYAZ17oAFQ545FEC1j3faEA1nb3yNpvDld8Dlhd6qMI03+tEGBlCmDznrlOCV/BEWH/AEcas3kAnGsAADJycpH2RXtQL3NUQHhHQXMvLmaRf6WLh6W+uMy7/dqMx7Nyq59UkI5Afn41YXIwRGowJ2RjKWh9NG+TSX2oZY3Ig6HflLAAf18ATFjaTn8NNlmwAEyJ8bwFeWf+PXZsAEuqSXrNl7DhvNHC39uiy8BYpZEvkXgYHlmRsLMPZGSOZYvOEmCHDV/3bZIuRGVR0JoAjWu9MGtBHGo1K2Qu0YqZKmgnem5nT4JBaXrHbJOtinG/eHJtyIVu0KvEWIKaorEMLVjZAEUMOlqOAEwwAEdhwZ5LSXPJ1N23mLhWAEJpg4+IM3UAKEbFx7Xbvrkur4ed0bOnXXYAZ1iPgnq2qZKi1be8SH2mo1AnAAAcgUlEQVR4nO1diV8bR5YGmhtBtzgatVCrLRBS65ZBAnFJFigWModAODgmlz1JJuPMOgYf4DiJ7WEAG2fsJN5dJx4b25PZZJzN7uRf3PeqJaGLS3SJsTff7xdHR6uq++O9eu9VvXpVVvY6gVFAv6PK1wkVb7/zzrvv1TK0+ymrfY1QXfP+OUBNNe2O6AtzCcFUnUdUlUBFXyeUbFyjLcyvJcqqfsPBQV+YX0tofsOBUVdW/xsOjqMW9VcUtN3o1xK/eR5FoOGoRf03/D9C9W84OP61YgOBBbRlguN5XhQrj/rGcnDUop4Eg2xx/t/ZPvjwo99//If3LhC8/ckf/+3ip5e6JzxtHMeXIirfL+pooPxAF5cLgui1351fXNLr9dYsRCIRvb5r6+nVy8Muj8iLVVRu98A48tigTqrz2/t6lq8gSa0dgNaO5hxoHfqI/vrVhVivxIuao77jekqxAdvnj4r70SdQTP81c8+q1RoMthLKCrKGxGkdjsj4zMkNVyXoKpW7PghoeM6iGPWL+7iOFe3m+DIwBpS17sUaoN2hn70qb5g4Xp3bhsG0uIbKGtSHZI+ao33S7hfVVkv+6UDPaEuSsiRrzc3KUEaQHObSrGlR4vQh44qrQlTjPqf77u5xlzuAivyy/mkbu/slDFwTGHuvJU0ZkNYMo9f49dBnF2/c+NzjefHFl19+ePPWG0tNSJ02jXaDY/2ks5vhDq2nrFkX3eM2Swk2zIWzxrXs6XwGOesLjF3I4MyqjzROXb3sc3nQXwMnDa5H143nvDZiXTOZcxDeMsc3JgP7vUuGBZUokjUqvrNUIWW/J6hIva60gG4+TnFmjVj1+smrAzGXJIp19bltVUiS4LdH55dvWzPlLWR09mrSF2nENDS5Dexym5K090WFUJLYwKIzI4YEeC14o+ZbYDNbgi0tqJaRuZmT/b2SB72xSs0ODWi806c2n2xLW7sj5FxxSenL+ZgzjQWO/gMVJ6AHA6OwphtiwWpOB+6DlAWBM2DNGlkfcPo86Pfvrlksa7nm7nkjxVt7u2N8oDMm8MmvuZicwVoJHqm8BLAEdIghQRjS6b4+dqxFQWsLSkwlr9lHE3XlQpXNfGoRDCtQ195OdFTuhTBVhC/52IgxhRWujvoDlVWUAA22IYDNUmex2XvGVtOsTYacsW5N/X6bkSSvbehPY/OreivQBuI2df3PsQ2XWF9RN+FKo1ek+SgKSiDNSmwOYMpYr9l9K0VaR+uMcWHiQI4+ifGvBe4vIW9ah8HRNX6yMyaKZSK/DWqPcURg7Trzx0nSWiPrTrm7mGdkLdHAfJOeDG/tBsNa54LEV6p/s7uipmSolaYD8QtJ0qxzA50bNWJtMQ1VSza3+Ws9Gd6AtxnZaRLVvtld0ZDlH1IFK0bd95OWoDUSkmUXV3xbfF+gp0lPWAMvRDZOFN9WMSiZTDNAWk+KtBZUq8N4CAxrD5hXk7QZpmSjqxT+xjZUiIL3g/qGbdKCs87OYVFzmObAoPp17k29wpthEmjjK9S61717L4m/Vl5eJZrTpFnXUTSqDtukgMK7TduIi1PjRveH0gh0pnpacfRWQ58YZtodv61PK2nv4WdB9o2S/G2qorp4irTTstMjqtOsEA6cekxoazKgSVCp2b1BMTYg0xwVFfWSxE4HzC1AGoSfkbVOp6RRrYuw2zwaIayBAzLigYbJ7Ida7e8EajLM+MP2sB3idX/42ofLy+8iaeszMzcSCUkt753hwvb55WUUNsP4TCjW3c2X8b3DvmHXKxsfsEMQspvZMosuMNZyDNUzCD7aBITb6o0+rC3gfgPnyUHWQPEFaJwbHjGObFB3Q2j5z7X+cDhslyRbOPz18h0c0xpnZi53JxqKCgd2gDQUDn+0vAwmATR05rNEwiW6hoeHuzUq9lEAFHOKSMCO/4u648ca0RBAQPDmhLrKg+E8tK93YESqDxlHJjjAK6ugabBhnfs9Yj6D4It2q687DLqCMLY1NTUZ1kBNS+J+ULU1giR5A+6vFfM5JxtjNKybEiUQ1gxOY38JptfoxgaCzW67tXkL9DO4HgpdGvZV5UQEVW1t/KF7sdvubp65rQfS1qfu+WKeQ0cde4OmGLN+XWAZzGcjKmdnN5eXasBIX10413bYXuwB9yiaUeLpmriSzEhQ/IsIUd39Y42NYAkanXJ/gTCxqkbfdfbQwiZM68x6RUMH5BW+BKJGNTaw69x3CGvB07JcUyAgqK95591zzKE7ajC7xxTWZsHelGRcowawbeZ5JK1xR+PJMLwauXysTedegnFNMaKVR59xdAigy/EXhTXai5RsVBdXhG1cNvpKMT9JzYG2BAJnjiFrwRnZ6OFouuvV/kBgsSsZWMkSLzZQ7AxB78/BWyz346iiLXNz6ysrvSK9ripZi8USj8+jvI23PFhZMVHsDLqj2DbDenXg4KI1sIJtoztlyDCpwQ0CKzTYlAc3VbcApvJWySuhT2dGZw1cXHmkV1S1o3zUSWb3fT0JEMhMG1Wo66/5kygv1/j9X/T0YFgwOzm70b9Be5oV+rP3xK/owSDMTvb3d/OSKQuVqvZ2YNlkyOaJwgrA2pJgGM6GcQ6OaqHQPd+wh+pAo3Q9tHlmE1ibDYU+9Q2XebqzoPI0yEFTt/hvuroG3/qeKfilkAR5iatSaEIja0a5nvruFEFgw273FRzZmiaNIy5ezIK6nR04V1JDSma8qNszDxFswSqxBXOyPCwWl5N4IFRYdO4zirPrdPbzNHs6cMZC2/vfPH/+/Pye17HTZvO2uyYWlRhwQLB95lPE2W0CeyDR7OngKr3LuJYFXSqecsq7RAYMq+wxy/uIfFqwG+X7At+h87FKhA3jUaoTupQW9avTCgpPkNgxO6FWit766sKFNV/6imrJb//w2+dvv/3JRV+vpsAPa/1m/NZpyv+mAf5SaRVVY0fCTqCVUwRRqPlCUkFHdlZQ1nYK95gNDPOpD/x9v6S3nk2udSdzhZRVCBa9WTYKgVpw7k2TyHNcdioRjgqKimJgRenJyO1QATybGddYwMW1ooIyud+ShRjQKd79hrW52TEwzCmksNd6rNbtfRuRq/3kFhlLmMAPND9bPXasZf1et8QPx2KxzGUCZltFp8CvpqmiNKaf6vx+b0/PMrA2Ozu5sJDImfISbHaAUFHfYL+5DKS1hHy9VV74qEGaBtI6OjqsEb3VitsRIqGViroKsoCPqIcXyjLEsTdNZJU9I6m3XukVWBsfn+zP61VNUNkfatHhdAeQNicbhzlezPlaAEUy24Q6wR6/DaRpx40TFYIdPtPY40iao+Xpw88/2HxMaDvdn/VzIRwnC15znSZNbrNhne62Xk/0s7OOy+1VTdAQXzZlCYKYspKvKEwytxnGoTGrVtusRQ3FDy2BJ6iv6ysejm/jps8gbdaTmROajCUwmmItN9zAbpeT+lmoWzWhrtNMINh17j8Q1k47jdLOUYEwpFO2XQBrPL6fnkfSQivlxJVnQV1bW5vX5Yw4hJ2eV1KTgLW8hi068xhhDecmefWfaxs09lFJfSkHd0Be2S0qcC8re1WANbzMEliyNmtnjZ7kVijJvIiWwehKb42SvIGv0qzlbZiSzOY4Ya3J6dygGo1Q8TzMuh4yrAVleYPjdnI7WHtcr9W2K6xxZIaM2NNYyp3AD6wdke0PGNZ8i6T1Etb4vAandbouHNgMA7Kc65WoChqsiX6/rafnY2JC7/Uv7OStcSBa7e2t4wprHMdei1ubHZE3e5VdjojAKrA2s8IpAyHwfAr3rM22trQWYo2x+P3zPfPEiI7398fyL1ALVNYNqlOLerimZ/QUnsUHL0OvbXecnnUgazXOmHvVanWEFjw1tdCCDays39zUbHWs+Tz1aGDN4Pu7V8FABAcihLX8ZmurJXCubxMtHZCdGjXTl7Kg5r53MklEXuD6FKoozn07+cIXewO39e2Ocfkv8C9YA4/E3Z2HYW5W9mC5W9FiETWWOLhz1pCTg3cWSyWYByAtMpNkrdDOehb+XKOEtTV5BNphwKVj1C+fq54xZiwKGIa3WO7GMTKYm53rXyicgsew0U19e7th4N9BTZPjGthMrWOuk8xgohrAMLYIOhuSOTKOsP4AunBz8jzYiAKeB7kFWzy+pG9qHx+/t7AiiYKHQP0pUdVqXEhkN6MuKoF6Bt4jxmANtIQXC19tOwX6aZiSQTSQNbgKAwNtO7CWXn4QUqyRX0AAam3VRwb+wxxstTZCbKAEB5mNBnQ9xByA65HgRI3G9CbufXRyqj1kEurFBpJZYU0QiHoeUxwPXsx14RWIEDC2GwzG3kCSNQwZkqylC8SkWcM30zeXOqyO0w//89ZosDm05qkpl/r7+zcyy9QIZl1cj6xtyfIwYW1ElmXcMaoy1BNaVgmw7SxrC1/7+msIDoIzp++5unM0iVF071oPkKa/umBB1gygodAAmoeUhipNpjW0jBFt808g2lrv/+kRxAxz6xsesQp3g2ZOQLD2sH15Gdf3Zma+c3V7eE9sGEBhNV49hzm9ZgD/BMiaQTA42zmS46XjElaVxR8f1RvGP1nwpFjjMTRAJoG19D2lZQ1fQ4wKIerMCrgf1tbmRhjXqvIWBARBdLuV+GDWONItMsqOUfWeMQk6NRYqkhO5ZEoy20uP9vWFG/oWwT1oH0hITJo1sUJKsZYusyClWKvFwGEUfODxThOy1tEBL8RCaxfpicn8nlWEKvLKboNR3gbcJFchOGs0JrLiaMV99eqaDE2GjqvHj39/5jFQFbr4fcKjaOj4toZm2NAyDPSbm7Xrv35//KNNYK1l5m+fd+dND0L/OndPKhZVembSm5RVnExUwVFmvbY0/OAhwNszZzBXYX39QSw2keuiQ5fJuYkmUlUHZ6y7ukYm2oisIWupy5A1LbKG2Q84qdSsjWARHizN44iE5Lybx57HsO2pKeiZBBmMpzu5Ib5bvdldNWqYVvu9afiVt/Pzt4C1yckHG/0uTe71kj0ZZG/D0GGckFKsNeA1UnVtheTeRNaMfK1k3rRm1HpC2rQhZ21DTsuk50VofHIWeu7Fnhs8vSnU5F5eLBrUiQ2ENJS3rI5YA9BQnLPJvdoSWBrsSkHvILKmHZlgw5gA30ycfmG6z8t6+5YeQ0R1ySTCWIZbWBQo5Z70IGtV+Tci6pLWADMNSc9MeiVZlUclUE/VM7WeNZvJunvjnCzn2X126J/njqeA41qTYf3icZ+HteFqpuGkD4Yjxma3sH77ZpO2ff27bp6x/yn9i+MfLeKs+cz7NxJleSMVk15Jxq2P9GYm1XabCSSz+b7CmlMezgsOBGF7hEAbCqE2+KTC0N1lNAyXe/EHggStXCPx/UmfWC9Vpn+BNpQY00JRh0D2HiBr67jzkcrD1asZG2RCiprjhLVGp7yx6wR+ijWxrtxvfqzXG2ZPmjzKLwS0AMQVyQovpBRrhYIOZE2xNJhFXzgsUQF0BJikK+wnJZfhUrKGbsPvdBhlDf7Vh4WLwGw+0Wu1jrWN7IVBImta9NcUE5rdcXptD5dh6aX+qe43I4Sw2Z2cA3c6+d3yiVKyRvx3iM9JtuPTyxOsJXwGS08YJmUpfY+VWChMhCABZE0Go4GLfVVZrQsZM0VGemV26VRPT281COJ+7Z0MPtY/ayCs/TVGjBxvcf+iuG9bF37E7OR2w9bIhLjd7JDNZrE9A3dk9sGwp6JhItGdyD5GKWNW0rmiUcvTyAMdAWaHUmt7JKFoh6tEndce73IYtk5OCBKpArZhMf+iuCJK8QTDuHEiU8FxfR41VOtoQQ0V8xx+Nrq94NJf2hIfhwc6AJskEMUCJTs5AIzd4refedylfxpzVSYQvbw4PQY+nOL5GrqeLnjyHh1YA6etsdCsJPwhwOVRfi3LMYqsUZHg6obUvhaS8rfTZVK11BD99vnzP1z2Jasbwmf+8OboIGJr6rJLzFcyyXb/nefPv1kxVRToN+2uoZObF5SoBkoVEoWU6xHco2RhpaBkqmX8lOUt/hfnz5s8Al9oPIfIg/ykUNKokDah6HionFaacQuUJBiXW74iA9uaUz7w9mDiUfBi2qsomPqU63SkulWMwWm6u5LpOM8S/NE/Tqd6FOujlzPl+D+GEevyvqvjX3jK87rNMAYLfP6PVIJGTdZSETyWRMcBhsTvmFZUgLW6uu1/6zP/zbig/Iu/4coLdzP4nViXS4Hg7cppt06QLAEyrBmatrBX1FDyn0rPtw0VpZYZSkJk/UNDY2NoRGfX1zdivrw9yG1tfBvHMPAv/K+tDQYqkW2Dt8p38Bm+49oe/WDiy9jfdfnK2niWXIKfY04u/N9725cVNDD80NDPY/NLeoN2auqzWMwkpStNqh/FqzdGCsoilS5gEbyBwCrZuj0pd7o4jske1Cv9f//4rbcesv433nrrm0/5mydOzP7Z8/OJwa1LPHx39o7+u7ahK4NbD213Gj8TKtlnLf/1j4+6uh54PrgofXDR+/67c5fahh5r545lr0gI9kBgCSc5DSG5c4Lj+Ik3laKmI0ZO7SBBRc9D6kvCUt0Q7Xt55857IGxrA5dNEznRQbV3dB1YSmxeNw39+MB+4pJleeunHx8+G/xUA37F4MNnW/9Y+lV6tuX6cPxGNcQZ1oe3Jie8o/dePvW8DP3ccenm1Bej8L3Vl+VaSOG+vtEl3BM0M7A2YfJoTAv9Sezo+hQLNcU2tXZAVgfaUstUkZMjK9n+Jusd9bVZVv/7l1/b2jbvvbzuaXu09fPW/wxeamNAHwcTtq7/7epu847G7IqG6hPL99raXj59FpJehv453vto8p+t8P3tnJk7lh0KJP2O8c6Rbl7kUlDzIemCndaZGwsHVcDaA9Z2wrc55fGO/mo/keBubf30uCvxwQ2JIawNgqy1PRpMPPphgoxriZfXTf6le8+ue24Ba65H13+6At9bc+c7STiVTAEfkajudVR70UvJO66uUMqfJK1oLGuNrcI7ujV44jPJv3riROsD8WZXU+sPpmeDXSceaqorbMha98+PBwcfCsCaprre1uXzr2q71k3ej1vnEjZkbeLn21vjx3xZrUopC9rU1IXFUNR+sAw0qB0bKPndds5rt29uruJGx5lQLJHI6kbw/jjcIPGVAl9TUy95n/zxT4O/MqxYI+HorqkRxJoqloN3lZqaKuWTMriSFeF6iRdrBY1UxcLLiszk1Uq/3X5zc/Oxvql9JvRZIkEvMECoLbpslNhRP9mHTOJ3zJfMdj0Y/99dpLaCMqPt//7sDYFJ+/qpZT0m/VHqbRmTzlLMm5Bk+3RmXJBJWlCe8s5KleeGwTvH8vL+7UAUJ1VzT1piMmfFy+H5D3QUUyGk1wsMA071s2FyoXZEJSVlDUKqwCjJLMKlA06kfCCSUj/GAaRhEViO2jJLEmqLLjtEluA5RrTZPjhzBmLR4FQo5BsepnscEvR298wYBO6GyVBoeF8lEve383AHqLe0qkBx2ZQXpF4duGzBKdwcrHZPOd2SKmw4lxmSRwpmn2aDP3f+7Itic09pnrqa2u3Y0oJZk7XVe/+ieEhhnfvJ9i7Hffyi5pvjNUXeEt3q6axiEnB7AFbCodnV9u5tFLV95Myfbwl+FSm2t6I1ez9I1kHB6oi7rbqo0ROxBoqoyfspYcowNWeP1xb9+BRdaPDXp7EQCikq6ZQX6Lnr0lBq5tuAf56805kKQHPu/PvnD3AKUxbonqxUSSYnlTrzmIVHqx/R7E5u3R6XjcP764Zh+MLlNfaBYkV0n2DJ9r2WlI7SSfJhIDA4pU8XYKsqQQE2yl50OckuIrThBj4q+SqYppCsWof5VzS30yZB+2QlkuSjbE5sdBo3eApdYOXXRaVoXTuaAgpd5IK6LGdUGcYqG+qX+GJ4HNTSVYZLoZ9UTl3NdqPZ9NkGyoZutTsg5REdyJphnUb7hUD/3JZaZZEvbREOdV5LPsC5iZPTgpSikoetfULKq+15VQlOVlJ8XTK0RTAxS9XNrlhtBY/TMCRr/B2yIBJPyo7tmWJPQedTWx4JIIyycOF4XBna5ubWVhbUOxUCmn8Uj19B0sbHOy6vLFRWelIoLl+Bx8wm395JlkV6x7tAGrJvw1tRAW8/Wtwkh56tz4Ru+HyePcuQ7Q8NdnvP4jLJdNOGQpcTPlHj8aWwrwAhD+ICYMW0129pVLQWMkHeMtEAsQitwWDkdCcoqSr9VAlht/lK+rSbkQmxvGp7c0FxbZKtQ3v+thgx3j9SwwBTtn1aXIQcRHLYoQGHNHE6oBgCGNPW8WQlte5478toutDlytimqdNgOduxZCWOxvUVp+uQDnw5Nn0/Po/q6WjqaJ6EJnl1bno/oBobSGGS9zEk1INUtCRPc2xck/trxH0ftVq44YZooIfsEQJBa3F2bohieSmqpqegglDvDDacPA9ZcRCStB1aRYkvs6jXa5WEZ6eRlElR77b3cwsUgVwprJEDV3HNCpmzzp7sHGZ4UWQq924jH2VMOBAfTZ26Ous0JrjSneeZvAVahUIQkj2K8Fbja1s0+u2TO8QBCQZnBtY+N5mKOnW11jIdnR99Ym1H1gzjAwPDnh3qrFADxZOVEOkkI+V1mz2QPOHXarXqp4wgJQdf8GNYS597/ra+PXXC78gK3UyYowbD+vE06eT4FmydMa5McAc6FwK0ngsHevCclqSsOTuHS3iWYwoltDwAoaEv0JOypq2RxtOd/Sb+AIcVSg1hdzx5cjmwZliXZRd/OHtcDHaJDXCnb3EO9i4QBKKlQYU24A1PL+fEfR1RIwgWkLMla/IYaa2jfa2zX1InzjgYdhZCRjCZKOwVZPDg8bFgUGGttdVqDZ10JoQ9BziGZf3TurErpDqgcoo0OQ6Gdln2wtjR/60yvTniozEHLwg2t3m1JaiwBrxFZq+e3OgtJxJX6AcklLVci/ZgJV1SHBA5G1/r3ICAlsIN7oldTlbSmEaANSrDAoxOgZ47x4Lpurh66+zVgQ2XhxPFuryLJUHjvXa/55fbYHe1CtoNjpnOlYn8i0uEXfxDCTMOafiPaAkt04H591rSvLU26yMtUzOnh10msq0KtzCy5CgFi9d+d37xij4lZqQOpSNkdHYTpaZwe/t4gF3A8DQzDmGUCow9Dm7zRpiLbF0PPbj46Y3PP/e8+OLLLz+8ufzGE6xFYW1OU9YOnJ10dvNHetxlab3qDFRLlrC7Zym4TRzWNmlutkYien2y1gfypVQ/2RYz8PIWXPX0qh/uB0f5BytjRVv01GLQmiSuQ0FrR3M+kpRFJgfkmOfoj1U9koEhDZa1XDOjbUTidmcNKJu96tzo5Q+7oqICShwb5KNekvz2vp7FJ6Q4f0HWgLGIvmXq6sJwb72oKX0kkA+qp67uE1hszm8Pv9xcva2MZNsgY5z+h6czl30uD1ingx1zWQViQeWOj3qASAF0lef9XtsHH370+28/fnwBZO6r8blP/njx4qeXXBMSwx0sylfarDp+/DydyJ7K36JIQAiA80mZAMdNxN3vxTRXVasfPEtF2I58XKOI+pouYI1GyyW2ocoJQ/QKdOfgxYsaKu1S0fqd0XbunW+ev3u+VP4WtQcsrVNdfx7rzr2oKG2vakOlCon7Bn/um7Nnn58vSZIZRdAR4J2hjGul7lV10DAxrz3+pfy1VwZHLeqvKI76z/ZKgu4+qtcVRy3qrySonKz0+oP+foPXESWODV4THPUQ8YriqN3sVxH1/wcKbq9WbftqPQAAAABJRU5ErkJggg=="
        alt=""
      />
    </div>
  );
};
