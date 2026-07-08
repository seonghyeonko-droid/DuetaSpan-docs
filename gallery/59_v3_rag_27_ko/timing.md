# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 글렌 휴즈님하고 로스 린치님 중에 누가 더 나이가 많으신지 궁금했어요.
     5.19s  agent 발화 시작: <ret> 음, 세대를 넘나드는 뮤지션들을 비교하는 질문이시군요. 글렌 휴즈님은 천구백오십일년 팔월 이십일일
     5.19s  <ret> 발화 (turn1 첫 프레임)
     5.33s  user  발화 끝
     7.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.03s]: Glenn Hughes was born on August 21, 1951, and is an English singer and
    14.23s  agent 발화 끝
    15.59s  user  발화 시작: 네, 그러시군요.
    16.87s  agent 발화 시작: 그리고 로스 린치님은 아무래도 훨씬 나중에 태어나셨죠.
    16.92s  user  발화 끝
    20.62s  agent 발화 시작: <ret> 자, 로스 린치님에 대한 기록을 한번 확인해 볼까요. 로스 린치님은 천구백구십오년 십월 이십구일에
    20.63s  <ret> 발화 (turn4 첫 프레임)
    20.71s  ⚡SPAN 주입 [d'=0.08s / d_lead=5.70s]: Ross Lynch was born on October 29, 1995, in Littleton, Colorado.
    20.84s  agent 발화 끝
    24.76s  user  발화 시작: 아.
    25.25s  user  발화 끝
    29.15s  agent 발화 시작: 그러니까, 명백히 글렌 휴즈님이 연세가 훨씬 많으시네요.
    29.48s  agent 발화 끝
    33.45s  agent 발화 끝
    33.74s  user  발화 시작: 아, 와, 차이가 꽤 크네요.
    35.68s  user  발화 끝
    36.05s  agent 발화 시작: 맞아요—두 분의 출생 연도 차이는 삼십 년이 넘어요. 음악계에서는 정말 긴 시간이네요.
    42.21s  agent 발화 끝
