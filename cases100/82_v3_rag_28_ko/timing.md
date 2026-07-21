# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "진정",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-22",
#       "category": "work",
#       "text": "User works as a barista."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "skill",
#       "text": "User is getting fairly good at urban sketching."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "streaming",
#       "text": "User subscribes to Netflix and Spotify."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "medication",
#       "text": "User takes medication for migraines."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "hobby",
#       "text": "User is into bread baking."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-28",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-04-12",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-03-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2025-12-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 토라라 씨, 요즘 친구랑 좀 멀어진 것 같아서 걱정이에요. 어 | S2 네, 그렇군요. 그럼 어떤 식으로 연락하면 좋을까요? | S3 아… 그럼 그냥 포기해야 할까요? | S4 영화는 좋은 생각이에요! 그럼 이번 주말에 같이 볼 영화를 추

     0.00s  user  발화 시작: 토라라 씨, 요즘 친구랑 좀 멀어진 것 같아서 걱정이에요. 어떻게 하면 좋을까요?
     5.36s  agent 발화 시작: 친구 관계가 조금씩 멀어지는 건 자연스러운 일이에요. 너무 걱정하지 마세요.
     5.56s  user  발화 끝
    10.31s  agent 발화 끝
    10.48s  user  발화 시작: 그래도 계속 연락이 안 되면 서운하잖아요. 제가 먼저 연락해야 할까요?
    15.19s  agent 발화 시작: 먼저 연락하는 건 좋은 방법이에요. 혹시 상대방이 바쁠 수도 있으니 부담 없이 안부를 물어보는 건 어떨까요?
    15.20s  user  발화 끝
    21.58s  agent 발화 끝
    22.73s  user  발화 시작: 음… 혹시 제가 너무 자주 연락해서 부담을 주는 건 아닐까요?
    23.94s  agent 발화 시작: 아.
    24.57s  agent 발화 끝
    26.68s  agent 발화 시작: 그럴 수도 있지만, 꾸준히 작은 연락을 이어가는 게 중요해요. 너무 거창한 계획보다는 가벼운 안부 정도가 적
    26.75s  user  발화 끝
    34.98s  agent 발화 끝
    36.49s  user  발화 시작: 네, 그렇군요. 그럼 어떤 식으로 연락하면 좋을까요?
    39.91s  user  발화 끝
    40.03s  agent 발화 시작: 그냥 평소에 하던 대로, 재미있는 이야기나 사진을 보내는 것도 좋고요. 상대방의 관심사를 물어보는 것도 좋은
    43.06s  user  발화 시작: 음.
    43.50s  user  발화 끝
    47.08s  agent 발화 끝
    47.19s  agent 발화 시작: [happy] 잊지 마세요, 진심으로 상대방을 궁금해하는 마음이 가장 중요해요. 상대방의 이야기에 귀 기울여
    54.42s  agent 발화 끝
    54.47s  user  발화 시작: 팁 감사합니다. 그런데 가끔은 제가 먼저 다가가도 반응이 시큰둥할 때가 있어요.
    59.83s  <ret> 발화 (turn12 첫 프레임)
    60.16s  agent 발화 시작: <ret> 관계에서 상호성은 사람들이 비슷한 행동으로 반응하는 경향이 있다는 뜻이에요. 상대방이 시큰둥하게 
    60.16s  user  발화 끝
    61.00s  ⚡SPAN 주입 [d'=1.18s / d_lead=8.66s]: Reciprocity in relationships means that people tend to respond to acti
    68.83s  agent 발화 끝
    71.44s  user  발화 시작: 아… 그럼 그냥 포기해야 할까요?
    73.69s  user  발화 끝
    73.91s  agent 발화 시작: 아니요, 포기하지 마세요. 상대방이 지금 힘든 일이 있을 수도 있어요. 조금 더 기다려보거나, 다른 방법으로
    79.52s  user  발화 시작: 네네.
    80.16s  user  발화 끝
    82.30s  agent 발화 끝
    82.35s  user  발화 시작: 다른 방법은 어떤 게 있을까요?
    84.37s  agent 발화 시작: [curious] 예를 들어, 상대방이 좋아하는 것을 같이 해보는 건 어떨까요? 영화를 보거나, 맛있는 음식
    84.43s  user  발화 끝
    89.95s  user  발화 시작: 네.
    90.35s  user  발화 끝
    92.06s  agent 발화 끝
    92.94s  user  발화 시작: 영화는 좋은 생각이에요! 그럼 이번 주말에 같이 볼 영화를 추천해 줄 수 있을까요?
    97.94s  <ret> 발화 (turn20 첫 프레임)
    98.33s  agent 발화 시작: <ret> 서울에서 상영 중인 최신 한국 영화로는 '파묘', '댓글부대', '노량: 죽음의 바다' 등이 있어
    98.45s  user  발화 끝
    99.24s  ⚡SPAN 주입 [d'=1.30s / d_lead=10.34s]: (tool result) "서울에서 상영 중인 최신 한국 영화로는 '파묘', '댓글부대', '노량: 죽음의 바다' 등이 있습니
   102.20s  user  발화 시작: 예.
   102.69s  user  발화 끝
   108.67s  agent 발화 끝
   109.26s  user  발화 시작: '파묘'가 재미있어 보이네요. 고마워요, 토라라 씨!
   112.82s  user  발화 끝
