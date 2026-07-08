# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 음, 정부 기관에 대해 읽다가 궁금해졌는데, 재향군인부(Department of Veterans Affair
     7.42s  <ret> 발화 (turn1 첫 프레임)
     7.57s  agent 발화 시작: <ret> 네, 정말 흥미로운 질문이고, 우리나라를 위해 봉사한 것에 대한 인식이 커지고 있음을 보여주는 질
     7.79s  user  발화 끝
     9.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.39s]: The United States Department of Veterans Affairs was established on Ju
    13.91s  agent 발화 시작: 재향군인부는 천구백삼십 년 칠월 이십일일에 설립됐습니다.
    13.96s  agent 발화 끝
    18.13s  agent 발화 끝
    18.86s  user  발화 시작: 천구백삼십 년? 그거… 생각보다 얼마 안 된 것 같지 않아? 그 전에 베테랑들은 없었어?
    23.97s  <ret> 발화 (turn4 첫 프레임)
    24.12s  agent 발화 시작: <ret> 물론이죠—베테랑들을 돌보는 역사는 훨씬 더 오래됐지만, 처음에는 그렇게 체계화되지 않았어요.
    24.33s  user  발화 끝
    25.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: Prior to 1930, the administration of veterans’ benefits was divided am
    30.57s  agent 발화 시작: 천구백삼십 년 이전에 베테랑 혜택은 여러 기관에서 관리했습니다.
    30.61s  agent 발화 끝
    34.91s  agent 발화 끝
    35.74s  user  발화 시작: 그러니까 그때는 좀  patchwork(조각보처럼)이었어? 대체 그 기관들은 뭘 했는데—
    40.81s  agent 발화 시작: 연금이나 의료 지원 같은 필요를 해결했지만, 중앙 집중적인 초점이 부족했습니다.
    40.88s  user  발화 끝
    45.27s  user  발화 시작: 그때 베테랑 *만을* 위한 병원이 있었어?
    46.13s  agent 발화 끝
    48.23s  <ret> 발화 (turn9 첫 프레임)
    48.38s  agent 발화 시작: <ret> 정말 중요한 지적이에요—초기 시설은 종종 재활용되거나 규모가 상당히 제한적이었습니다.
    48.50s  user  발화 끝
    50.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: The first dedicated veterans’ hospital opened in 1866, originally as a
    54.40s  agent 발화 시작: 베테랑을 위한 최초의 병원은 남북 전쟁 이후인 천팔백육십육년에 개원했습니다.
    54.49s  agent 발화 끝
    59.96s  agent 발화 끝
    61.70s  user  발화 시작: 천팔백육십육 년… 그러니까 재향군인부 자체보다 육십 년 넘게 전이네? 꽤 큰 차이다. 그때 전담 부서를 만들
    70.38s  <ret> 발화 (turn12 첫 프레임)
    70.67s  agent 발화 시작: <ret> 특히 제1차 세계 대전 이후, 이러한 서비스를 통합해야 한다는 압력이 커졌습니다.
    70.84s  user  발화 끝
    72.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.55s]: The American Legion advocated strongly for a unified Department of Vet
    76.09s  agent 발화 시작: 미국 레지옹(American Legion)은 천구백이십년대 내내 통일된 부서를 적극적으로 캠페인했습니다.
    76.23s  agent 발화 끝
    82.44s  agent 발화 끝
