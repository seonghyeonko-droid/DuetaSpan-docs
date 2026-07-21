# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "주우",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "coffee",
#       "text": "User's usual coffee order is a flat white."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "employer",
#       "text": "User works at a fintech startup."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "schedule",
#       "text": "User has a hybrid 3-days-in-office week."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "show",
#       "text": "User is currently watching a stand-up comedy special."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-10",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-05-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     },
#     {
#       "date": "2026-02-26",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2025-12-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 요즘 좀 힘든 일이 많아서 기운이 없어요. | S2 영화 보는 걸 좋아하는데, 혹시 요즘 볼 만한 영화 있을까요? | S3 영화 말고 다른 취미도 추천해 주실 수 있나요? | S4 김치볶음밥은 할 수 있을 것 같아요.

     0.00s  user  발화 시작: 안녕하세요. 요즘 좀 힘든 일이 많아서 기운이 없어요.
     3.70s  user  발화 끝
     3.80s  agent 발화 시작: 안녕하세요. 힘든 일이 있으셨다니 마음이 아프네요. 제가 옆에서 조금이나마 힘이 되어 드릴 수 있으면 좋겠어
    11.58s  agent 발화 끝
    12.24s  user  발화 시작: 네, 고맙습니다. 뭘 해야 다시 힘을 낼 수 있을까요?
    15.71s  agent 발화 시작: 다시 힘을 내는 방법은 여러 가지가 있겠죠. 좋아하는 일을 하거나, 새로운 취미를 시작하거나, 아니면 잠시 
    15.85s  user  발화 끝
    20.74s  user  발화 시작: 네.
    21.29s  user  발화 끝
    25.82s  agent 발화 끝
    26.72s  user  발화 시작: 음… 새로운 취미를 시작하는 건 좋은 생각인 것 같아요. 뭘 해볼까요?
    31.40s  agent 발화 시작: 새로운 취미를 찾으시는군요! 혹시 평소에 관심 있던 분야가 있으신가요? 그림 그리기, 악기 연주, 운동, 요
    31.44s  user  발화 끝
    41.88s  agent 발화 끝
    43.33s  user  발화 시작: 영화 보는 걸 좋아하는데, 혹시 요즘 볼 만한 영화 있을까요?
    47.18s  <ret> 발화 (turn8 첫 프레임)
    47.67s  agent 발화 시작: <ret> 영화를 좋아하시는군요. 고전 영화를 좋아하신다면, 천구백삼십구년 팔월 이십오일에 개봉한 빅터 플레
    47.81s  user  발화 끝
    48.30s  ⚡SPAN 주입 [d'=1.12s / d_lead=11.08s]: The Wizard of Oz was released on August 25, 1939, and directed by Vict
    54.93s  user  발화 시작: 네.
    55.38s  user  발화 끝
    58.75s  agent 발화 끝
    58.97s  user  발화 시작: 오즈의 마법사요? 옛날 영화 아닌가요?
    61.49s  agent 발화 시작: 네, 오래된 영화이지만 정말 재미있고 감동적인 작품이에요. 아직 안 보셨다면 꼭 한번 보시길 추천드려요.
    61.56s  user  발화 끝
    70.06s  agent 발화 끝
    71.77s  user  발화 시작: …혹시 그 영화에 나오는 강아지 이름이 뭐였죠?
    74.87s  <ret> 발화 (turn13 첫 프레임)
    75.24s  agent 발화 시작: <ret> 아, 토토였죠! 정말 귀여운 강아지였어요.
    75.32s  user  발화 끝
    76.28s  ⚡SPAN 주입(IRRELEVANT) [d'=1.41s / d_lead=3.84s]: The average price of a gallon of milk in Boise, Idaho, is $3.79 as of 
    78.97s  agent 발화 시작: 토토는 도로시의 든든한 친구였죠.
    79.08s  agent 발화 끝
    79.81s  user  발화 시작: 네.
    80.25s  user  발화 끝
    81.61s  agent 발화 시작: 영화를 보면서 토토의 용감함과 충성심에 감동받으실 거예요.
    81.80s  agent 발화 끝
    86.42s  agent 발화 끝
    87.03s  user  발화 시작: 영화 말고 다른 취미도 추천해 주실 수 있나요?
    90.17s  user  발화 끝
    90.17s  agent 발화 시작: 요리를 좋아하신다면 새로운 레시피에 도전해 보시는 것도 좋을 것 같아요.
    92.54s  user  발화 시작: 네.
    93.03s  user  발화 끝
    94.71s  user  발화 시작: 요리… 생각보다 어렵지 않을까요?
    94.75s  agent 발화 끝
    97.09s  agent 발화 시작: 처음에는 조금 어려울 수 있지만, 차근차근 따라 하다 보면 금방 익숙해질 거예요. 간단한 요리부터 시작해 보
    97.20s  user  발화 끝
   100.29s  user  발화 시작: 네.
   100.87s  user  발화 끝
   105.15s  agent 발화 끝
   105.29s  user  발화 시작: 간단한 요리… 뭐가 좋을까요?
   108.20s  user  발화 끝
   108.32s  agent 발화 시작: 김치볶음밥이나 계란찜처럼 간단하면서도 맛있는 요리가 많답니다.
   110.61s  user  발화 시작: 예.
   111.10s  user  발화 끝
   113.18s  agent 발화 끝
   113.28s  user  발화 시작: 김치볶음밥은 할 수 있을 것 같아요.
   115.51s  agent 발화 시작: 김치볶음밥은 정말 맛있죠! 혼자서 즐기셔도 좋고, 친구들과 함께 만들어 먹어도 좋을 거예요.
   115.58s  user  발화 끝
   123.23s  agent 발화 시작: [happy] 김치볶음밥을 만들면서 스트레스도 풀고, 맛있는 음식도 즐기면서 기분 전환을 해보세요.
   123.39s  agent 발화 끝
   129.96s  user  발화 시작: 좋은 생각이네요. 감사합니다.
   130.04s  agent 발화 끝
   132.05s  agent 발화 시작: 천만에요. 언제든지 힘이 필요하시면 저를 찾아주세요. 제가 항상 곁에서 응원하겠습니다.
   132.12s  user  발화 끝
   138.44s  agent 발화 끝
