# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 스탠 L. 홀랜드 님은 누구신가요?
     1.96s  <ret> 발화 (turn1 첫 프레임)
     2.56s  agent 발화 시작: <ret> 음, 그 이름은 바로 떠오르지 않네요.
     2.63s  user  발화 끝
     2.96s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.98s]: (no information found)
     4.41s  agent 발화 시작: 죄송하지만 스탠 L. 홀랜드 님에 대한 정보는 없는 것 같아요.
     4.54s  agent 발화 끝
     8.11s  agent 발화 끝
     8.18s  user  발화 시작: 아, 그러시군요. 그럼 실비아 얼 박사님은 어떠세요?
    10.50s  <ret> 발화 (turn4 첫 프레임)
    11.09s  agent 발화 시작: <ret> 아, 훨씬 익숙한 이름이네요. 실비아 얼 님은 해양 생물학자이자 탐험가, 작가, 강연자이신 건 아
    11.28s  user  발화 끝
    11.50s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.18s]: Sylvia Earle is an American marine biologist, explorer, author, and le
    14.97s  user  발화 시작: 네네.
    15.52s  user  발화 끝
    18.50s  agent 발화 끝
    18.56s  agent 발화 시작: 정말 해당 분야의 선구자이신 것 같아요.
    21.14s  agent 발화 끝
    21.53s  user  발화 시작: 지금도 연구를 하고 계신가요?
    23.45s  user  발화 끝
    23.62s  agent 발화 시작: 그녀는—
    23.64s  user  발화 시작: 다시 말씀드려도 될까요? 지금도 해양 탐사에 적극적으로 참여하고 계신가요?
    24.26s  agent 발화 끝
    27.50s  <ret> 발화 (turn10 첫 프레임)
    28.11s  agent 발화 시작: <ret> 네, 여전히 활발하게 활동하고 계세요. 그녀는 "희망의 바다"라고 부르는 곳을 보호하기 위한 글로
    28.13s  user  발화 끝
    28.50s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.69s]: Dr. Earle founded Mission Blue, a global initiative to protect "Hope S
    38.86s  agent 발화 끝
    40.21s  user  발화 시작: 그 "희망의 바다"는 정말 흥미로운데요. 어떤 곳이 "희망의 바다"로 지정되는 건가요?
    44.23s  <ret> 발화 (turn12 첫 프레임)
    44.82s  agent 발화 시작: <ret> 해양 건강에 중요한 지역이에요.
    44.95s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.94s]: Hope Spots are marine areas that contribute to ocean health, offering 
    45.02s  user  발화 끝
    46.69s  agent 발화 시작: 해양의 건강에 기여하고, 중요한 서식지를 제공하는 해양 지역이라고 할 수 있어요.
    46.76s  agent 발화 끝
    51.86s  agent 발화 끝
