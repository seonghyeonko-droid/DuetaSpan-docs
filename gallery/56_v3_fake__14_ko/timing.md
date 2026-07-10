# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "다민",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-05-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 '맘마미아!'에 나오는 'My Love, My Life' | S2 ABBA요? 'Dancing Queen' 같은 노래도 비외른  | S3 …님은 다른 가수들의 노래도 작곡하셨나요? | S4 와, 정말 대단하시네요. 알려주셔서 정말 감사합니다.

     0.00s  user  발화 시작: 혹시 '맘마미아!'에 나오는 'My Love, My Life' 노래를 누가 썼는지 아세요?
     4.67s  <ret> 발화 (turn1 첫 프레임)
     4.82s  agent 발화 시작: <ret> '맘마미아!'에 나오는 'My Love, My Life'는 정말 아름다운 곡이죠. 그 노래를 작곡
     4.85s  user  발화 끝
     6.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: 벤ny 앤더슨과 비외른 울바에우스가 'My Love, My Life' 노래를 썼습니다.
    14.58s  <ret> 발화 (turn2 첫 프레임)
    14.74s  agent 발화 시작: <ret> 'My Love, My Life'를 작곡한 분은 비외른 울바에우스 님입니다.
    14.79s  agent 발화 끝
    16.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: Björn Ulvaeus
    18.95s  agent 발화 끝
    20.24s  user  발화 시작: 아, 그렇군요. 혹시 비외른 울바에우스 님은 다른 유명한 노래도 많이 쓰셨나요?
    24.93s  <ret> 발화 (turn4 첫 프레임)
    25.28s  user  발화 끝
    25.32s  agent 발화 시작: <ret> 비외른 울바에우스 님은 ABBA의 멤버로도 활동하셨는데, ABBA의 수많은 히트곡들을 작곡하셨어요
    26.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.48s]: 비외른 울바에우스는 스웨덴의 작곡가, 프로듀서, 음악가로, 아바(ABBA)의 멤버였습니다.
    34.80s  agent 발화 끝
    35.92s  user  발화 시작: ABBA요? 'Dancing Queen' 같은 노래도 비외른 울바에우스 님이 쓰신 건가요?
    40.84s  <ret> 발화 (turn6 첫 프레임)
    40.96s  user  발화 끝
    41.00s  agent 발화 시작: <ret> 네, 맞아요. 'Dancing Queen'을 포함해서 ABBA의 많은 곡들이 비외른 울바에우스 님
    42.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.17s]: 비외른 울바에우스 님은 ABBA의 수많은 히트곡들을 작곡하셨어요.
    47.72s  user  발화 시작: 음.
    48.03s  user  발화 끝
    51.62s  <ret> 발화 (turn8 첫 프레임)
    52.01s  agent 발화 시작: <ret> 그런 음악적 재능은 정말 놀랍지 않나요? 저는 개인적으로 그런 분들을 존경하는 편이에요.
    52.17s  agent 발화 끝
    53.62s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.34s]: 10.0°C, humidity 87%, wind 21.6 km/h
    54.69s  user  발화 시작: 네.
    55.00s  user  발화 끝
    58.35s  agent 발화 끝
    58.42s  user  발화 시작: 네, 저도요. 혹시 비외른 울바에우스…
    62.77s  user  발화 끝
    64.35s  user  발화 시작: …님은 다른 가수들의 노래도 작곡하셨나요?
    66.90s  <ret> 발화 (turn12 첫 프레임)
    66.97s  agent 발화 시작: <ret> 비외른 울바에우스 님이 다른 가수들을 위해 작곡한 노래에 대한 정보는… 비외른 울바에우스 님은 주
    67.07s  user  발화 끝
    68.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.17s]: 비외른 울바에우스 님과 베니 앤더슨 님의 합작품이라고 하네요… 베니 앤더슨 님과 함께 쓰셨습니다.
    71.36s  user  발화 시작: 네.
    71.67s  user  발화 끝
    79.37s  user  발화 시작: 아, 그렇군요. 그럼, 혹시 비외른 울바에우스 님은 지금도 음악 활동을 하고 계신가요?
    79.49s  agent 발화 끝
    84.30s  <ret> 발화 (turn15 첫 프레임)
    84.55s  user  발화 끝
    84.61s  agent 발화 시작: <ret> 네, 비외른 울바에우스 님은 여전히 활발하게 음악 활동을 이어가고 계세요. 최근에도 새로운 프로젝
    86.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.22s]: 비외른 울바에우스 님은 현재도 음악 활동을 하고 있습니다.
    91.51s  user  발화 시작: 음.
    92.01s  user  발화 끝
    93.56s  user  발화 시작: 와, 정말 대단하시네요. 알려주셔서 정말 감사합니다.
    93.83s  agent 발화 끝
    96.47s  agent 발화 시작: 도움이 되었다니 기쁘네요. 새로운 음악을 찾아 듣는 즐거움도 느껴보세요.
    96.47s  user  발화 끝
   101.33s  agent 발화 끝
