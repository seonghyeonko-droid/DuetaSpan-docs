# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "은찬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-19",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 프롤님. 요즘 친구를 사귀고 싶은데, 어떻게 시작 | S2 네, 알아봐 주시면 정말 감사하겠어요. | S3 와, 정말 고마워요! 혹시 그 동호회에 바로 연락해도 괜찮을까 | S4 …혹시 그 동호회 말고, 좀 더 캐주얼한 모임 같은 건 없을까

     0.00s  agent 발화 시작: 안녕하세요, 은찬님! 저는 프롤이라고 해요. 혹시 오늘 어떤 이야기를 나눠볼까요?
     5.84s  user  발화 시작: 네.
     5.84s  agent 발화 끝
     6.42s  user  발화 시작: 안녕하세요, 프롤님. 요즘 친구를 사귀고 싶은데, 어떻게 시작해야 할지 잘 모르겠어요.
     6.42s  user  발화 끝
    12.85s  agent 발화 시작: 친구를 사귀고 싶으시다니, 좋은 생각이네요! 혹시 어떤 스타일의 친구를 원하시는지, 아니면 어떤 활동을 같이
    12.85s  user  발화 끝
    23.36s  user  발화 시작: 음… 비슷한 취미를 가진 친구면 좋겠어요. 저는 요즘 새 관찰하는 게 너무 재밌거든요.
    23.36s  agent 발화 끝
    30.90s  <ret> 발화 (turn5 첫 프레임)
    30.96s  agent 발화 시작: <ret> 새 관찰에 관심이 많으시군요! 사용자님은 새 관찰에 관심이 많으신 것 같아요. 혹시 부산에서 새 
    30.96s  user  발화 끝
    31.20s  ⚡SPAN 주입 [d'=0.30s / d_lead=11.10s]: [2026-05-04] User is into birdwatching.
    42.05s  user  발화 시작: 네, 알아봐 주시면 정말 감사하겠어요.
    42.05s  agent 발화 끝
    44.77s  <ret> 발화 (turn7 첫 프레임)
    44.97s  agent 발화 시작: <ret> 부산 새 관찰 동호회가 해운대구에 있네요. 연락처는 공 오 일 칠 사 육 팔 공 공 공이고, 웹사
    44.97s  user  발화 끝
    45.31s  ⚡SPAN 주입 [d'=0.54s / d_lead=11.10s]: (tool result) Found: Busan Birdwatching Society, Haeundae-gu, Busan. C
    56.07s  user  발화 시작: 와, 정말 고마워요! 혹시 그 동호회에 바로 연락해도 괜찮을까요? 아니면—
    56.07s  agent 발화 끝
    61.91s  user  발화 시작: …혹시 그 동호회 말고, 좀 더 캐주얼한 모임 같은 건 없을까요?
    61.91s  user  발화 끝
    68.34s  agent 발화 시작: 네네.
    68.34s  user  발화 끝
    68.81s  <ret> 발화 (turn11 첫 프레임)
    68.92s  agent 발화 시작: <ret> 부산 새 애호가 모임이 있습니다. 다음 모임은 칠월 십오일 오전 열시에 센텀시티에서 열릴 예정이고
    68.92s  agent 발화 끝
    69.56s  ⚡SPAN 주입 [d'=0.75s / d_lead=9.35s]: (tool result) Found: Busan Bird Lovers Meetup, Centum City, Busan. Nex
    78.27s  agent 발화 끝
