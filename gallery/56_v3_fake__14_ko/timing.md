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

# EXAMINER(FDB-v2) 단계: S1 혹시 '맘마미아!'에 나오는 '나의 사랑 나의 생명' 노래 누 | S2 아바요? 아, 네, 아바 노래 정말 좋아해요. | S3 와, 정말 오래됐네요. 그 때가 언제였더라… | S4 네, 봤어요. 너무 감동적이었어요.

     0.00s  user  발화 시작: 혹시 '맘마미아!'에 나오는 '나의 사랑 나의 생명' 노래 누가 썼는지 아세요?
     4.46s  <ret> 발화 (turn1 첫 프레임)
     4.61s  agent 발화 시작: <ret> '맘마미아!'에 등장하는 '나의 사랑 나의 생명'은… 비욘 울바에우스 씨가 작곡하셨습니다. 혹시 
     4.63s  user  발화 끝
     6.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.62s]: 벤ny 앤드erson과 비외른 울바에우스가 '나의 사랑 나의 생명'을 썼습니다.
    16.74s  user  발화 시작: 아, 그렇군요. 그럼 그 분은…
    17.22s  agent 발화 끝
    18.62s  user  발화 끝
    20.85s  user  발화 시작: …다른 유명한 노래도 많이 쓰셨어요?
    22.70s  <ret> 발화 (turn4 첫 프레임)
    22.83s  user  발화 끝
    22.85s  agent 발화 시작: <ret> 비욘 울바에우스 씨는 아바(ABBA) 그룹의 멤버로 활동하시면서 수많은 히트곡을 쓰셨어요. 어떤 
    24.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.33s]: 비욘 울바에우스 씨는 벤ny 앤더슨 씨와 함께 '나의 사랑 나의 생명'을 쓰셨습니다.
    35.18s  agent 발화 끝
    35.73s  user  발화 시작: 아바요? 아, 네, 아바 노래 정말 좋아해요.
    38.02s  <ret> 발화 (turn6 첫 프레임)
    38.35s  user  발화 끝
    38.42s  agent 발화 시작: <ret> 아바의 노래를 좋아하신다니 정말 다행이네요. 그분들의 음악은 시대를 초월하는 매력이 있는 것 같아
    40.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.41s]: 비욘 울바에우스 씨는 아바(ABBA) 그룹의 멤버로 활동하시면서 수많은 히트곡을 쓰셨어요.
    49.69s  user  발화 시작: 음… '댄싱 퀸'이 제일 좋은 것 같아요.
    49.83s  agent 발화 끝
    52.09s  user  발화 끝
    52.42s  <ret> 발화 (turn8 첫 프레임)
    52.58s  agent 발화 시작: <ret> '댄싱 퀸'은 정말 신나는 노래죠. 많은 분들이 가장 좋아하는 곡으로 꼽으시는 것 같아요. 그 노
    54.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.85s]: 비욘 울바에우스 씨는 아바(ABBA) 그룹의 멤버로 활동하시면서 수많은 히트곡을 쓰셨어요.
    61.39s  user  발화 시작: [happy] 저도요! 근데 그 노래가 언제 나온 건지 궁금하네요.
    61.43s  agent 발화 끝
    65.02s  <ret> 발화 (turn10 첫 프레임)
    65.41s  user  발화 끝
    65.42s  agent 발화 시작: <ret> '댄싱 퀸'이 처음 발매된 건… 이천칠백사십년입니다… 이천칠백사십년입니다.
    67.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: '댄싱 퀸'은 많은 분들이 가장 좋아하는 곡으로 꼽으시는 것 같아요.
    68.28s  user  발화 시작: 네.
    68.63s  user  발화 끝
    72.27s  agent 발화 끝
    72.57s  user  발화 시작: 와, 정말 오래됐네요. 그 때가 언제였더라…
    75.53s  user  발화 끝
    75.61s  <ret> 발화 (turn13 첫 프레임)
    75.69s  agent 발화 시작: <ret> 시간이 참 빠르죠. 그 노래가 나온 지 벌써 오십년이 가까이 되었네요. 혹시 다른 노래에 대해서도
    77.61s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=8.81s]: 10.0°C, humidity 86%, wind 20.2 km/h
    78.92s  user  발화 시작: 와.
    79.42s  user  발화 끝
    84.34s  user  발화 시작: 아니요, 괜찮아요.
    84.50s  agent 발화 끝
    85.30s  user  발화 끝
    85.65s  agent 발화 시작: 그렇군요. 혹시 다른 뮤지컬 영화에 대해서도 이야기를 나눠볼까요?
    89.96s  user  발화 시작: 뮤지컬 영화요? 음… '위키드'가 생각나네요.
    90.13s  agent 발화 끝
    93.10s  user  발화 끝
    93.17s  <ret> 발화 (turn18 첫 프레임)
    93.56s  agent 발화 시작: <ret> '위키드'는 정말 인기 있는 뮤지컬이죠. 그 영화의 음악도 훌륭하고, 스토리도 감동적이에요. 혹시
    95.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: 혹시 다른 뮤지컬 영화에 대해서도 이야기를 나눠볼까요?
   103.48s  user  발화 시작: 네, 봤어요. 너무 감동적이었어요.
   103.52s  agent 발화 끝
   105.79s  user  발화 끝
   105.89s  agent 발화 시작: '위키드'를 보셨다니 정말 좋네요. 그 영화는 볼 때마다 새로운 감동을 주는 것 같아요. 혹시 다른 뮤지컬 
   112.69s  user  발화 시작: 네.
   113.04s  user  발화 끝
   114.74s  user  발화 시작: 아니요, 괜찮아요. 그냥 얘기하는 게 좋네요.
   114.84s  agent 발화 끝
   117.00s  user  발화 끝
   117.12s  agent 발화 시작: 저도요. 편안하게 이야기를 나누는 시간이 즐겁네요. 혹시 오늘 하루는 어떠셨는지 여쭤봐도 될까요?
   124.12s  agent 발화 끝
