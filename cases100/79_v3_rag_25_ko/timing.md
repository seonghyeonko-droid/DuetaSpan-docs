# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "채완",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "mid 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "music",
#       "text": "User likes listening to a lo-fi jazz playlist."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "child",
#       "text": "User has a child named Daniel, age 10."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "emergency",
#       "text": "User's emergency contact is Sara."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "partner",
#       "text": "User's partner is named Sara."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-27",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-01-18",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     },
#     {
#       "date": "2025-12-20",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 밀하우스라는 캐릭터 이름을 지은 사람이 누구인지 아세요? | S2 아, 음악도 했다고요? 어떤 노래가 유명한가요? | S3 혹시 앨리 고르츠의 다른 노래도 추천해 주실 수 있나요? | S4 흥미롭네요. 혹시 그 노래를 들어볼 수 있는 곳이 있을까요?

     0.00s  user  발화 시작: 혹시 밀하우스라는 캐릭터 이름을 지은 사람이 누구인지 아세요?
     1.66s  agent 발화 시작: 예.
     2.06s  agent 발화 끝
     3.04s  <ret> 발화 (turn2 첫 프레임)
     3.61s  agent 발화 시작: <ret> '심슨 가족'의 밀하우스를 지은 사람은 매트 그로닝의 어린 시절 친구인 밀하우스 반 호튼이라고 합
     3.64s  ⚡SPAN 주입 [d'=0.60s / d_lead=6.67s]: Matt Groening named Milhouse after a childhood friend, Milhouse Van Ho
     3.67s  user  발화 끝
     5.87s  user  발화 시작: 네.
     6.18s  user  발화 끝
    10.28s  agent 발화 끝
    10.58s  user  발화 시작: 매트 그로닝은 또 어떤 작품들로 유명한가요?
    13.29s  agent 발화 시작: 매트 그로닝은 '퓨처라마'와 '디스엔챈티드' 같은 애니메이션도 만들었답니다.
    13.36s  user  발화 끝
    18.41s  user  발화 시작: 그 외에 다른 활동도 있었나요?
    18.43s  agent 발화 끝
    20.31s  agent 발화 시작: 네, 매트 그로닝은 풍자적인 가사로도 유명한 음악가이기도 합니다.
    20.36s  user  발화 끝
    24.87s  agent 발화 끝
    25.66s  user  발화 시작: 아, 음악도 했다고요? 어떤 노래가 유명한가요?
    28.74s  <ret> 발화 (turn9 첫 프레임)
    29.04s  agent 발화 시작: <ret> 천구백구십일년에 앨리 고르츠가 밀하우스에 대한 노래를 썼는데, 매트 그로닝이 코러스로 참여했습니다
    29.09s  user  발화 끝
    30.08s  ⚡SPAN 주입 [d'=1.34s / d_lead=6.95s]: Allie Goertz wrote a song about Milhouse in 1991, and Matt Groening pr
    31.60s  user  발화 시작: 네.
    32.00s  user  발화 끝
    35.98s  agent 발화 끝
    37.07s  user  발화 시작: 앨리 고르츠는 어떤 가수인가요?
    39.56s  user  발화 끝
    39.64s  agent 발화 시작: 앨리 고르츠는 재치 있는 가사와 독특한 스타일로 유명한 싱어송라이터입니다.
    42.63s  user  발화 시작: 예.
    42.98s  user  발화 끝
    44.39s  agent 발화 끝
    44.62s  user  발화 시작: 혹시 앨리 고르츠의 다른 노래도 추천해 주실 수 있나요?
    46.83s  agent 발화 시작: 네네.
    47.41s  agent 발화 끝
    48.07s  user  발화 끝
    48.35s  agent 발화 시작: 앨리 고르츠는 'Time to Say Goodbye'라는 곡으로도 유명합니다—
    51.55s  user  발화 시작: 잠깐만요, 밀하우스 노래가 더 궁금한데, 혹시 가사를 알 수 있을까요?
    52.23s  agent 발화 끝
    55.89s  <ret> 발화 (turn18 첫 프레임)
    56.33s  agent 발화 시작: <ret> [curious] 잠시만 기다려 주세요.
    56.41s  user  발화 끝
    57.12s  ⚡SPAN 주입 [d'=1.23s / d_lead=1.56s]: The song about Milhouse is a quirky, upbeat tune that references many 
    57.89s  agent 발화 끝
    57.95s  agent 발화 시작: 밀하우스에 대한 노래는 그 캐릭터의 삶의 여러 측면을 언급하는 기발하고 신나는 곡입니다.
    64.11s  agent 발화 끝
    64.59s  user  발화 시작: 어떤 면을 언급하고 있나요? 좀 더 자세히 알려주세요.
    67.94s  agent 발화 시작: 노래 가사에는 밀하우스의 안경, 엄마와의 관계, 리사의 짝사랑 등이 담겨 있다고 합니다.
    68.00s  user  발화 끝
    74.51s  agent 발화 끝
    74.75s  user  발화 시작: 흥미롭네요. 혹시 그 노래를 들어볼 수 있는 곳이 있을까요?
    77.63s  <ret> 발화 (turn23 첫 프레임)
    78.24s  agent 발화 시작: <ret> 유튜브에서 앨리 고르츠의 '밀하우스' 노래를 찾을 수 있습니다. 주소는 이렇습니다: https:/
    78.37s  user  발화 끝
    78.42s  ⚡SPAN 주입 [d'=0.79s / d_lead=10.52s]: (tool result) {"artist": "Allie Goertz", "track name": "Milhouse", "so
    88.76s  agent 발화 끝
    89.21s  user  발화 시작: 감사합니다. 덕분에 좋은 노래를 알게 되었네요.
    92.36s  user  발화 끝
    92.68s  agent 발화 시작: [happy] 도움이 되었다니 기쁩니다. 즐겁게 감상하세요!
    97.36s  agent 발화 끝
