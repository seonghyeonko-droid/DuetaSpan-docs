# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "은영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-05-21",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-09",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-22",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 요즘 마라톤 연습 때문에 너무 힘들어요. | S2 네, 땅콩은 절대 안 돼요. 그리고… 제가 채식주의자잖아요. | S3 맞아요. 혹시… 제가 집에서 요리하기 귀찮을 때, 근처에 괜찮 | S4 와, 고마워요! 덕분에 저녁 걱정은 덜었네요.

     0.00s  agent 발화 시작: 안녕하세요, 은영님. 저는 기아스예요. 오늘 하루도 편안하게 보내셨나요?
     4.44s  user  발화 시작: 음… 요즘 마라톤 연습 때문에 너무 힘들어요.
     4.44s  agent 발화 끝
     8.24s  <ret> 발화 (turn2 첫 프레임)
     8.32s  agent 발화 시작: <ret> 마라톤 연습이 힘드시군요. 꾸준히 하시는 모습이 정말 대단하세요. 혹시 연습 계획에 대해 이야기해
     8.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.76s]: [2026-06-27] User is into marathon training.
     8.32s  user  발화 끝
    16.08s  agent 발화 시작: 마라톤 연습을 하고 계신다는 사실을 기억하고 있어요. 혹시 제가 도움이 될 만한 부분이 있을까요?
    16.08s  agent 발화 끝
    23.84s  user  발화 시작: 사실… 지난번에 얘기했던 것처럼, 훈련하면서 식단 조절도 같이 하고 싶어요.
    23.84s  agent 발화 끝
    29.31s  <ret> 발화 (turn5 첫 프레임)
    29.39s  agent 발화 시작: <ret> 식단 조절도 함께 하고 싶으시군요. 혹시 특별히 피해야 하는 음식이 있으신가요?
    29.39s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.10s]: [2026-05-21] User is allergic to peanuts.
    29.39s  user  발화 끝
    35.49s  agent 발화 시작: 땅콩 알레르기가 있으시다는 점을 기억하고 있습니다. 식단 구성에 반영해야 할까요?
    35.49s  agent 발화 끝
    41.03s  user  발화 시작: 그치.
    41.03s  agent 발화 끝
    41.59s  user  발화 시작: 네, 땅콩은 절대 안 돼요. 그리고… 제가 채식주의자잖아요.
    41.59s  user  발화 끝
    45.70s  <ret> 발화 (turn9 첫 프레임)
    46.02s  agent 발화 시작: <ret> 채식주의자이시군요. 제가 기억하고 있습니다.
    46.02s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.22s]: [2026-01-06] User is pescatarian.
    46.02s  user  발화 끝
    48.24s  agent 발화 시작: 생선을 드시는 채식주의자, 그러니까 페스코 베지테리언이시라는 점도 알고 있어요.
    48.24s  agent 발화 끝
    53.23s  user  발화 시작: 맞아요. 혹시… 제가 집에서 요리하기 귀찮을 때, 근처에 괜찮은 채식 식당 있나요?
    53.23s  agent 발화 끝
    59.49s  <ret> 발화 (turn12 첫 프레임)
    59.89s  agent 발화 시작: <ret> 근처에 '러빙헛'과 '우 베지'라는 채식 식당이 있어요. '러빙헛'은 비건이고 평점이 사 점 이점
    59.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.97s]: (tool result) Restaurants found: 'Loving Hut' (vegan, 4.2 stars, 1.5km
    59.89s  user  발화 끝
    74.86s  user  발화 시작: 오, 러빙헛이 가까운 것 같네요. 거기 예약해 줄 수 있어요?
    74.86s  agent 발화 끝
    80.24s  <ret> 발화 (turn14 첫 프레임)
    80.40s  agent 발화 시작: <ret> '러빙헛'에 칠월 십일일 저녁 일곱시에 예약이 완료되었습니다. 확인 번호는 엘 에이치 칠 팔 구 
    80.40s  ⚡SPAN 주입 [d'=1.84s / d_lead=8.32s]: (tool result) Reservation confirmed for Loving Hut, July 11, 2026, 7:0
    80.40s  user  발화 끝
    88.72s  user  발화 시작: 와, 고마워요! 덕분에 저녁 걱정은 덜었네요.
    88.72s  agent 발화 끝
    92.05s  agent 발화 시작: 다행이에요. 훈련과 식단 관리 모두 잘 하시길 바랄게요.
    92.05s  user  발화 끝
    96.48s  agent 발화 끝
