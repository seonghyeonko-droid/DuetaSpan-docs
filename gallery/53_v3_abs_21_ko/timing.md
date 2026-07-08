# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 뭐가 1015년부터 계속 쓰였어?
     2.34s  <ret> 발화 (turn1 첫 프레임)
     2.57s  agent 발화 시작: <ret> 네, 정말 흥미로운 질문이신데요, 지금 당장은 정확한 답을 드리기가 어렵습니다.
     2.58s  user  발화 끝
     3.94s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.33s]: (no information found)
     6.01s  user  발화 시작: 음.
     6.41s  user  발화 끝
     7.80s  agent 발화 시작: 기록을 찾아봤는데, 안타깝게도 그 시기부터 계속 사용되었다고 기록된 특정 물건은 없는 것 같아요.
     7.89s  agent 발화 끝
    14.52s  agent 발화 끝
    14.63s  user  발화 시작: 오. 그럼 가장 오래된 성당은? 지금도 예배에 쓰고 있는 데 말이야.
    19.70s  <ret> 발화 (turn5 첫 프레임)
    20.01s  agent 발화 시작: <ret> 계속 사용된 가장 오래된 성당을 알아보고 있습니다… 1079년에 건축을 시작한 윈체스터 대성당은 
    20.14s  user  발화 끝
    21.22s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.68s]: Winchester Cathedral began construction in 1079 and has been in near-c
    30.30s  user  발화 시작: 와, 진짜 오래됐네! 세월 동안 많이 바뀌었어?
    30.44s  agent 발화 끝
    33.34s  user  발화 끝
    33.55s  agent 발화 시작: 아, 그럼요. 성당은 시대에 따라 변화하는 법이니까요. 여러 세대의 석공들이—저처럼요—자신의 흔적을 남기죠.
    41.75s  agent 발화 끝
    42.02s  user  발화 시작: 아— 그러니까, 큰 구조적인 변화가 있었냐고?
    45.72s  user  발화 끝
    45.73s  agent 발화 시작: 네, 물론입니다. 윈체스터 대성당은 12세기부터 16세기까지 고딕 양식으로 대대적인 재건축을 거쳤습니다.
    53.48s  agent 발화 끝
