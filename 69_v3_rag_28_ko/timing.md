# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 그거 읽고 있었는데… 언제 시작된 거야?
     2.86s  user  발화 끝
     2.92s  <ret> 발화 (turn1 첫 프레임)
     2.99s  agent 발화 시작: <ret> 좋은 질문이에요, 역사를 생각해보면… 미국 보훈부는 천구백삼십년 칠월 이십일일에 설립됐습니다.
     4.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.26s]: The United States Department of Veterans Affairs was established on Ju
    10.82s  agent 발화 끝
    10.93s  user  발화 시작: 천구백삼십년? 그거 좀… 의외로 최근 같지 않아? 더 오래된 줄 알았어.
    16.58s  agent 발화 시작: 미국 역사에 비하면 비교적 최근에 만들어진 부처인 것 같아요. 예전에는 그런 체계적인 지원에 집중하지 않았을
    16.81s  user  발화 끝
    24.92s  agent 발화 끝
    25.11s  user  발화 시작: 그래도 그 전에 뭔가 있었겠지? 퇴역 군인들을 위한 도움이라도?
    29.20s  <ret> 발화 (turn5 첫 프레임)
    29.28s  agent 발화 시작: <ret> 물론 그런 지원이 있었어요—천구백삼십년 이전에 보훈청이 천구백이십일년에 만들어져서 혜택과 서비스를
    29.32s  user  발화 끝
    31.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.45s]: Prior to 1930, the Veterans Bureau, created in 1921, provided benefits
    37.48s  agent 발화 끝
