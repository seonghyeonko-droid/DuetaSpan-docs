# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "라담",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-08",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-06-06",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 대서양 시티에 있는 타지마할은 언제 지어졌는지 알 수 있 | S2 그냥 자꾸 딴 생각이 나요. 뭘 해야 할지 모르겠고… | S3 알겠어요. 짧은 시간부터 시작해 봐야겠네요. | S4 아, 진짜 짜증나네.

     0.00s  user  발화 시작: 혹시 대서양 시티에 있는 타지마할은 언제 지어졌는지 알 수 있을까요?
     3.47s  <ret> 발화 (turn1 첫 프레임)
     3.63s  agent 발화 시작: <ret> 대서양 시티의 타지마할 호텔은 천구백팔십삼년 사월 이일에 문을 열었고, 건설 비용은 육억 이천만 
     3.63s  ⚡SPAN 주입 [d'=0.50s / d_lead=8.90s]: The Taj Mahal Hotel in Atlantic City opened on April 2, 1983, and cost
     3.74s  user  발화 끝
    12.53s  agent 발화 끝
    12.56s  user  발화 시작: 와, 엄청 비싸네요.
    13.81s  agent 발화 시작: 그렇죠? 호텔 건설 비용이 꽤 많이 들었던 것 같아요. 요즘도 비싸겠지만요.
    14.03s  user  발화 끝
    18.54s  agent 발화 끝
    19.46s  user  발화 시작: 음… 저는 공부에 좀 집중하는 게 어려워요. 집중력을 높이는 방법 같은 거 있을까요?
    24.65s  user  발화 끝
    24.65s  agent 발화 시작: 집중력을 높이는 건 정말 중요한 문제죠. 혹시 지금 어떤 점이 가장 힘든지 말씀해 주실 수 있을까요?
    31.10s  agent 발화 끝
    31.12s  user  발화 시작: 그냥 자꾸 딴 생각이 나요. 뭘 해야 할지 모르겠고…
    33.97s  agent 발화 시작: 딴 생각이 나는 건 흔한 일이에요. 혹시 지금 공부하는 내용이 흥미가 없거나 어렵게 느껴지나요?
    34.03s  user  발화 끝
    36.94s  user  발화 시작: 응.
    37.39s  user  발화 끝
    39.77s  <ret> 발화 (turn9 첫 프레임)
    40.01s  agent 발화 시작: <ret> 긍정적인 마음가짐을 유지하는 것도 중요해요. 마음챙김 연습, 예를 들어 명상은 집중력을 크게 향상
    40.09s  agent 발화 끝
    41.21s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.56s]: Studies show that mindfulness practices, such as meditation, can signi
    50.66s  user  발화 시작: 명상… 해본 적은 없는데, 좀 어려울까요?
    50.77s  agent 발화 끝
    53.80s  user  발화 끝
    53.89s  agent 발화 시작: 처음에는 조금 어색할 수 있지만, 꾸준히 연습하면 분명히 도움이 될 거예요. 짧은 시간부터 시작해 보세요.
    60.00s  agent 발화 끝
    60.48s  user  발화 시작: 알겠어요. 짧은 시간부터 시작해 봐야겠네요.
    62.68s  agent 발화 시작: 네, 부담 없이 시작하는 게 중요해요. 지금 바로 짧게 해볼까요? 아니면 나중에 시도해 보시겠어요?
    62.83s  user  발화 끝
    66.72s  user  발화 시작: 그치.
    67.12s  user  발화 끝
    68.97s  agent 발화 끝
    70.43s  user  발화 시작: 나중에 시도해 볼게요. 오늘 저녁에 해봐야겠어요.
    73.16s  user  발화 끝
    73.24s  agent 발화 시작: 좋아요. 저녁에 편안하게 시간을 내서 해보세요.
    75.23s  user  발화 시작: 어.
    75.53s  user  발화 끝
    76.48s  agent 발화 끝
    76.59s  user  발화 시작: 아, 진짜 짜증나네.
    77.97s  user  발화 끝
    78.21s  agent 발화 시작: 주변에서 조금 시끄러운 것 같네요. 혹시 조용한 곳으로 자리를 옮기시는 건 어떠세요?
    83.37s  user  발화 시작: 네, 옮겨볼게요.
    83.54s  agent 발화 끝
    84.65s  agent 발화 시작: 네, 집중하기 좋은 환경을 만드는 게 중요하죠. 힘내세요!
    84.70s  user  발화 끝
    88.49s  agent 발화 끝
