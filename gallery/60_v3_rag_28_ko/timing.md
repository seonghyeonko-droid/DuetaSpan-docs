# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 음, 정부 기관에 대해 읽다가 궁금해졌는데, 참전용사부 실제로 언제 시작됐어?
     5.15s  <ret> 발화 (turn1 첫 프레임)
     5.46s  agent 발화 시작: <ret> 네, 정말 흥미로운 질문이고, 우리나라에 대한 봉사를 점점 더 중요하게 생각하게 된 것을 보여주는
     5.64s  user  발화 끝
     7.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: The United States Department of Veterans Affairs was established on Ju
    12.60s  agent 발화 끝
    12.66s  agent 발화 시작: 참전용사부는 천구백삼십년 칠월 이십일일에 설립됐습니다.
    17.61s  agent 발화 끝
    17.64s  user  발화 시작: 천구백삼십년? 그거… 생각보다 얼마 안 된 것 같지 않아? 그때보다 훨씬 전에 참전용사들이 있었잖아.
    23.71s  <ret> 발화 (turn4 첫 프레임)
    23.86s  agent 발화 시작: <ret> 네, 물론이죠—참전용사들을 돌보는 것은 훨씬 더 오래된 역사를 가지고 있지만, 처음에는 그렇게 공
    23.98s  user  발화 끝
    25.55s  ⚡SPAN 주입 [d'=1.84s / d_lead=8.21s]: Prior to 1930, the administration of veterans’ benefits was divided am
    32.01s  agent 발화 시작: 천구백삼십년 이전에 참전용사들의 혜택은 여러 기관에서 관리했습니다.
    32.06s  agent 발화 끝
    37.34s  agent 발화 끝
    38.45s  user  발화 시작: 그러니까 그때까지는 좀  patchwork 식으로 운영됐다는 거야? 대체 그 기관들은 뭘 했는데—
    43.80s  agent 발화 시작: 연금이나 의료 지원 같은 필요를 해결했지만, 중앙 집중적인 초점이 부족했습니다.
    43.88s  user  발화 끝
    48.66s  user  발화 시작: 근데 그때 참전용사 *만을* 위한 병원이 있었어?
    49.45s  agent 발화 끝
    51.55s  <ret> 발화 (turn9 첫 프레임)
    51.78s  agent 발화 시작: <ret> 네, 아주 중요한 지적이에요—초기 시설은 종종 재활용되거나 규모가 상당히 제한적이었습니다.
    51.90s  user  발화 끝
    53.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: The first dedicated veterans’ hospital opened in 1866, originally as a
    58.02s  agent 발화 시작: 참전용사를 위한 최초의 병원은 남북전쟁 이후인 천팔백육십육년에 개설됐습니다.
    58.22s  agent 발화 끝
    65.02s  agent 발화 끝
    65.40s  user  발화 시작: 천팔백육십육년… 그러니까 참전용사부 자체보다 육십 년 넘게 전이네? 그 사이에 전담 부서를 만들려는 큰 움직
    73.65s  <ret> 발화 (turn12 첫 프레임)
    73.72s  agent 발화 시작: <ret> 제일차 세계 대전 이후, 그런 서비스를 통합해야 한다는 압력이 커졌습니다.
    73.92s  user  발화 끝
    75.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.04s]: The American Legion advocated strongly for a unified Department of Vet
    78.62s  agent 발화 시작: 미국 퇴역군인회는 천구백이십년대 내내 통일된 부서를 적극적으로 캠페인했습니다.
    78.76s  agent 발화 끝
    84.27s  agent 발화 끝
