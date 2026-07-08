# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시, 에이팀이 마지막으로 노히트 게임을 당한 게 언제였는지 아시나요? 엄청 오래된 것 같아요.
     6.11s  <ret> 발화 (turn1 첫 프레임)
     6.30s  user  발화 끝
     6.35s  agent 발화 시작: <ret> 좋은 질문이세요. 팀에게는 정말 답답한 경험이었을 텐데요. 애슬레틱스는 두천십팔년 사월 이십일이 
     8.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.11s]: <The last time the Oakland Athletics were no-hit was April 21, 2018.>
    16.04s  agent 발화 끝
    16.07s  user  발화 시작: 와, 정말 오래됐네요. 누가 던졌어요?
    18.53s  <ret> 발화 (turn3 첫 프레임)
    18.69s  agent 발화 시작: <ret> 알아봐 드릴 수 있습니다.
    18.93s  user  발화 끝
    19.33s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.43s]: <James Paxton of the Seattle Mariners pitched a no-hitter against the 
    20.11s  agent 발화 시작: 제임스 팩스턴 선수가 시애틀 매리너스 소속으로 그날 오클랜드 상대로 노히트 게임을 던졌습니다.
    20.11s  agent 발화 끝
    25.72s  agent 발화 끝
    26.28s  user  발화 시작: 그때 신인이었어요?
    27.50s  agent 발화 시작: 정말 흥미로운 점이네요.
    27.61s  user  발화 끝
    28.25s  user  발화 시작: 아니요, 팩스턴 선수가 그때 커리어 초반이었는지 궁금해요.
    28.88s  agent 발화 끝
    31.47s  agent 발화 시작: 신인은 아니었지만, 아직 성장하고 있는 단계였어요.
    31.49s  user  발화 끝
    32.56s  user  발화 시작: 네.
    33.01s  user  발화 끝
    34.69s  agent 발화 시작: 팩스턴 선수는 두천십팔년에 메이저 리그 네 번째 시즌을 뛰고 있었고, 두천십칠년에 데뷔했습니다.
    34.70s  agent 발화 끝
    40.45s  user  발화 시작: 음, 알겠습니다. 정말 도움이 됐어요. 감사합니다.
    40.47s  agent 발화 끝
    43.60s  user  발화 끝
