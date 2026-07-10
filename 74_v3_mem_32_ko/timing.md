# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "정현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-11-19",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-12",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 누라님. 잘 지내고 있어요. 혹시 제가 예전에 말 | S2 음… 사실 다음 달에 친구들과 함께 경주에 가는 걸 생각하고  | S3 야외 좌석이 있다니 좋네요!— | S4 와, 정말 감사합니다! 덕분에 편하게 여행 계획을 세울 수 있

     0.00s  agent 발화 시작: 안녕하세요, 정현님! 저는 여러분의 삶을 응원하는 라이프 코치 누라예요. 오늘 하루도 활기차게 시작하셨나요?
     8.11s  agent 발화 끝
     8.48s  user  발화 시작: 안녕하세요, 누라님. 잘 지내고 있어요. 혹시 제가 예전에 말씀드렸던 여행 계획 기억하시나요?
    15.01s  <ret> 발화 (turn2 첫 프레임)
    15.08s  agent 발화 시작: <ret> 창가 자리를 선호하신다고 말씀해주셨어요. 여행할 때 창밖 풍경을 보시는 걸 좋아하시죠.
    15.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: [2025-11-19] User prefers a window seat when traveling.
    15.20s  user  발화 끝
    21.70s  user  발화 시작: 네, 맞아요. 그때 제가 창가 자리를 꼭 부탁드린다고 말씀드렸었죠.
    21.89s  agent 발화 끝
    26.04s  agent 발화 시작: 기억하고 있어요. 혹시 최근에 특별히 관심 있는 여행지가 있으신가요?
    26.19s  user  발화 끝
    30.91s  agent 발화 끝
    31.00s  user  발화 시작: 음… 사실 다음 달에 친구들과 함께 경주에 가는 걸 생각하고 있어요.
    36.06s  agent 발화 시작: 경주요? 정말 멋진 곳이죠! 혹시 경주에서 특별히 보고 싶은 곳이 있으신가요? 아니면 맛집이라도?
    36.19s  user  발화 끝
    44.02s  agent 발화 끝
    44.04s  user  발화 시작: 사실 맛집을 좀 알아보고 싶어요. 특히 친구들이랑 같이 먹을 만한, 좀 특별한 곳이 있을까요?
    49.84s  <ret> 발화 (turn8 첫 프레임)
    49.91s  agent 발화 시작: <ret> 황리단길에 있는 한식당이 평점이 사 점 오점에 야외 좌석도 마련되어 있다고 해요.
    50.02s  user  발화 끝
    50.88s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.56s]: (tool result) Restaurant: Hwangnidan Gil, Korean, 4.5 stars, outdoor s
    53.52s  user  발화 시작: 네.
    54.02s  user  발화 끝
    56.17s  agent 발화 끝
    56.80s  user  발화 시작: 야외 좌석이 있다니 좋네요!—
    58.58s  user  발화 시작: 혹시 그 황리단길 식당 예약해 줄 수 있나요?
    58.78s  user  발화 끝
    61.52s  <ret> 발화 (turn12 첫 프레임)
    61.53s  user  발화 끝
    61.60s  agent 발화 시작: <ret> 네, 황리단길 식당에 팔월 십일 저녁 일곱시에 여섯명으로 예약이 완료되었어요. 확인번호는 엑스 제
    61.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.69s]: (tool result) Reservation confirmed for 6 people at Hwangnidan Gil on 
    71.07s  user  발화 시작: 와, 정말 감사합니다! 덕분에 편하게 여행 계획을 세울 수 있겠네요.
    71.28s  agent 발화 끝
    76.13s  agent 발화 시작: 천만에요. 여행 준비 잘 하시고, 즐거운 시간 보내세요!
    76.26s  user  발화 끝
    80.99s  agent 발화 끝
