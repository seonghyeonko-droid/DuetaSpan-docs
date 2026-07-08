# v3_rags_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사용자: 아메리칸 걸 인형이 처음 만들어진 해는 언제예요?
     3.57s  <ret> 발화 (turn1 첫 프레임)
     4.17s  agent 발화 시작: <ret> 모시: 음, 그거 궁금했구나. 제일 처음 아메리칸 걸 인형이 나온 게 팔십육 년도야.
     4.35s  user  발화 끝
     4.53s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.32s]: The first American Girl doll was released in 1986.
    10.19s  agent 발화 끝
