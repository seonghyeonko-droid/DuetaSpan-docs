# v3_rags_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 비밀 애완동물에 나오는 고양이 이름이 뭐예요?
     3.76s  agent 발화 시작: <ret> 네, 좋은 질문이네요. 그 영화에 나오는 회색 줄무늬 고양이는 오존이라고 해요.
     3.76s  <ret> 발화 (turn1 첫 프레임)
     3.76s  user  발화 끝
     4.76s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.15s]: The grey tabby cat in *The Secret Life of Pets* is named Ozone.
     9.68s  agent 발화 끝
