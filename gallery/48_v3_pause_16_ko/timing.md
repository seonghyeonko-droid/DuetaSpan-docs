# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 그래서 책을 읽다가 “빅 브라더”라는 단어가 나오더라고요.
     3.98s  user  발화 끝
     4.32s  agent 발화 시작: 흥미로운 표현이지—완전 우리 문화에 박혀 버렸잖아.
     8.44s  agent 발화 끝
     8.83s  user  발화 시작: 정말 그렇네요… 근데 그 이름이 원래 어디서 나온 거예요?
    11.64s  <ret> 발화 (turn3 첫 프레임)
    12.04s  agent 발화 시작: <ret> 그 인상적인 용어의 기원을 알아볼까… 그 표현은 조지 오웰의 *1984*라는 책에서 직접 나온 거
    12.20s  user  발화 끝
    13.00s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.19s]: The term "Big Brother" originates from the title of George Orwell's dy
    20.95s  agent 발화 끝
    21.45s  user  발화 시작: 1984… 물론 들어 봤지만…
    24.96s  user  발화 끝
    24.98s  agent 발화 시작: 정말 중요한 작품이야, 감시와 통제라는 주제를 다루고 있거든.
    29.61s  agent 발화 끝
    29.74s  user  발화 시작: …역사적인 언급이나—그런 걸로 생각했거든요.
    32.54s  <ret> 발화 (turn7 첫 프레임)
    32.62s  agent 발화 시작: <ret> 사실 오웰에게는 꽤 개인적인 영감이 있었어… 오웰은 영국 계급 제도와 기숙사 생활에 대한 기억을 
    32.70s  user  발화 끝
    34.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.59s]: Orwell stated he based the concept on memories of the British class sy
    42.95s  agent 발화 끝
    43.04s  user  발화 시작: 그럼 진짜 사람을 모델로 한 건 아니었네요?
    45.09s  agent 발화 시작: 좋은 질문인데—
    45.16s  user  발화 끝
    46.28s  user  발화 시작: 그러니까…
    46.38s  agent 발화 끝
    46.91s  user  발화 끝
    47.41s  user  발화 시작: 빅 브라더를 구체적으로 누구를 보고 만든 거예요?
    50.36s  <ret> 발화 (turn12 첫 프레임)
    50.46s  user  발화 끝
    50.52s  agent 발화 시작: <ret> 정확히 한 사람을 묘사한 건 아니야… 어떤 사람들은 스탈린의 광범위한 이미지가 오웰의 “빅 브라더
    52.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.38s]: While no single person inspired the figure, some scholars suggest Stal
    59.28s  user  발화 시작: 스탈린요? 그거… 꽤 어두운 연결이네요.
    59.28s  agent 발화 끝
    63.44s  user  발화 끝
    63.45s  agent 발화 시작: 그 소설은 그 시대의 불안감을 반영하고 있지, 그렇지 않아?
    67.75s  agent 발화 끝
    67.97s  user  발화 시작: 그렇네요. 세상이 얼마나 쉽게 변할 수 있는지 생각하게 만들어요.
    72.12s  agent 발화 시작: 맞아. 자유를 지키려면 끊임없이 경계해야 해.
    72.31s  user  발화 끝
    76.14s  agent 발화 끝
    76.14s  user  발화 시작: 신기하게도 소설이 그렇게 오래도록 기억되는 표현을 만들어낸다는 게 재밌네요.
    80.77s  agent 발화 시작: 언어는 강력한 힘이 있지; 이야기가 우리 세계관을 형성하는 거야.
    80.87s  user  발화 끝
    84.98s  agent 발화 끝
